import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { debounce } from "lodash";
import {
	TextInput,
	ToastAndroid,
	useColorScheme,
	useWindowDimensions,
} from "react-native";
import * as Progress from "react-native-progress";

import { WithSafeArea } from "../../../shared/ui/WithSafeArea";
import {
	Container,
	NetworkErrorResponder,
	SearchBar,
} from "../../../shared/ui";
import {
	useAppDispatch,
	useAppSelector,
	useLoadData,
} from "../../../shared/lib";
import {
	IPhoto,
	IPhotoCategory,
	getCuratedPhotos,
	getPopularPhotosCategories,
	searchPhotos,
	setCategories,
	setPhotos,
} from "../../../entities/photo";
import { RED_COLOR, Spacer, Themes } from "../../../shared/config";
import { CategoriesList } from "../../../widgets/categories-list";
import { PhotosList, EmptyPhotosList } from "../../../widgets/photos-list";

export const HomeScreen: React.FC = () => {
	const isDarkTheme = useColorScheme() === Themes.DARK;
	const [sectionsData, setSectionsData] =
		useState<Nullable<IPhotoCategory[]>>(null);
	const { photosData: cachedPhotos, categoriesData } = useAppSelector(
		(store) => store.photos,
	);
	const dispatch = useAppDispatch();
	const { width } = useWindowDimensions();
	const [searchValue, setSearchValue] = useState("");
	const [activeCategory, setActiveCategory] =
		useState<Nullable<IPhotoCategory>>(null);
	const [photosData, setPhotosData] = useState<Nullable<IPhoto[]>>(null);
	const [isErrorLoadPhotos, setIsErrorLoadPhotos] = useState(false);
	const [isEmptyPhotos, setIsEmptyPhotos] = useState(false);
	const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);
	const inputRef = useRef<TextInput>(null);

	const handleLoadSections = async () => {
		try {
			const data = await getPopularPhotosCategories();

			setCategories(data.collections, dispatch);
			setSectionsData(data.collections);
		} catch (err) {
			if (categoriesData) {
				setSectionsData(categoriesData);
			}
		}
	};

	const handleSearchQueryChange = debounce((text: string) => {
		setSearchValue(text);
		const searchLowerCase = text.toLocaleLowerCase();

		if (activeCategory?.title.toLocaleLowerCase() !== searchLowerCase) {
			const activeCategoryFromSearch = sectionsData?.find(
				(item) => item.title.toLocaleLowerCase() === searchLowerCase,
			);

			if (activeCategoryFromSearch) {
				setActiveCategory(activeCategoryFromSearch);

				return;
			}

			setActiveCategory(null);
		}
	}, 500);

	const handlePressExplore = () => {
		inputRef.current?.clear();
		setSearchValue("");
	};

	const handleLoadData = async () => {
		try {
			const data = await getCuratedPhotos(1);

			setPhotos(data.photos, dispatch);
			setPhotosData(data.photos);

			if (isErrorLoadPhotos) {
				setIsErrorLoadPhotos(false);
			}

			if (!data.photos.length) {
				setIsEmptyPhotos(true);
			} else {
				setIsEmptyPhotos(false);
			}
		} catch (err) {
			setIsErrorLoadPhotos(true);
			ToastAndroid.showWithGravity(
				"An error occurred while loading",
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM,
			);
		} finally {
			setIsLoadingPhotos(false);
		}
	};

	const handlePressSubmit = () => {
		if (searchValue) {
			handleFilterData();

			return;
		}

		handleLoadData();
	};

	const handleFilterData = async () => {
		setIsLoadingPhotos(true);
		try {
			const data = await searchPhotos(1, searchValue);

			setPhotosData(data.photos);

			if (!data.photos.length) {
				setIsEmptyPhotos(true);
			} else {
				setIsEmptyPhotos(false);
			}

			if (isErrorLoadPhotos) {
				setIsErrorLoadPhotos(false);
			}
		} catch (err) {
			setIsErrorLoadPhotos(true);

			if (cachedPhotos) {
				setPhotosData(cachedPhotos);
			}
			ToastAndroid.showWithGravity(
				"An error occurred while loading",
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM,
			);
		} finally {
			setIsLoadingPhotos(false);
		}
	};

	const { isLoading, handleReset, isError } = useLoadData({
		loadData: handleLoadSections,
		withHandleError: true,
		withEmptyData: true,
	});

	const handlePressReset = () => {
		if (isError) {
			handleReset();
		}

		if (isErrorLoadPhotos) {
			if (searchValue) {
				handleFilterData();

				return;
			}

			handleLoadData();
		}
	};

	useEffect(() => {
		if (!searchValue) {
			handleLoadData();
		}
	}, [searchValue]);

	useEffect(() => {
		if (searchValue) {
			handleFilterData();
		}
	}, [searchValue]);

	useEffect(() => {
		if (activeCategory) {
			setSearchValue(activeCategory.title);
		}
	}, [activeCategory]);

	const emptyListComponent = () => {
		if (isEmptyPhotos) {
			return <EmptyPhotosList onPress={handlePressExplore} />;
		}

		return <></>;
	};

	return (
		<WithSafeArea>
			<Container>
				<Wrapper>
					<Header>
						<Content>
							<SearchBar
								value={searchValue}
								inputRef={inputRef}
								onSubmit={handlePressSubmit}
								onChangeText={handleSearchQueryChange}
							/>
						</Content>
						{(isLoading || isLoadingPhotos) && (
							<ProgressBarWrapper>
								<Progress.Bar
									indeterminate
									indeterminateAnimationDuration={1200}
									color={RED_COLOR}
									width={width - Spacer.MEDIUM}
									borderWidth={0}
									unfilledColor={isDarkTheme ? "#B5B5B5" : "#F3F5F9"}
								/>
							</ProgressBarWrapper>
						)}
						{sectionsData && (
							<CategoriesList
								activeCategory={activeCategory}
								onChangeCategory={setActiveCategory}
								data={sectionsData}
							/>
						)}
					</Header>
					<NetworkErrorResponder
						onPress={handlePressReset}
						isError={isError || isErrorLoadPhotos}
					>
						<PhotosList
							emptyListComponent={emptyListComponent}
							data={photosData}
						/>
					</NetworkErrorResponder>
				</Wrapper>
			</Container>
		</WithSafeArea>
	);
};

const Wrapper = styled.View``;

const Content = styled.View`
	margin: 0 ${Spacer.LARGE}px;
`;

const Header = styled.View`
	padding-top: ${Spacer.SECONDARY}px;
	background: ${(props) => props.theme.backgroundColor};
`;

const ProgressBarWrapper = styled.View`
	margin: ${Spacer.SECONDARY}px ${Spacer.SMALL}px 0;
`;
