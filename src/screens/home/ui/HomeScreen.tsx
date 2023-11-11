import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { WithSafeArea } from "../../../shared/ui/WithSafeArea";
import {
	Container,
	NetworkErrorResponder,
	SearchBar,
} from "../../../shared/ui";
import { useLoadData } from "../../../shared/lib";
import {
	IPhoto,
	IPhotoCategory,
	getCuratedPhotos,
	getPopularPhotosCategories,
} from "../../../entities/photo";
import { Spacer } from "../../../shared/config";
import { CategoriesList } from "../../../widgets/categories-list";
import { PhotosList } from "../../../widgets/photos-list/ui/PhotosList";

export const HomeScreen: React.FC = () => {
	const [sectionsData, setSectionsData] =
		useState<Nullable<IPhotoCategory[]>>(null);
	const [searchValue, setSearchValue] = useState("");
	const [activeCategory, setActiveCategory] =
		useState<Nullable<IPhotoCategory>>(null);
	const [photosData, setPhotosData] = useState<Nullable<IPhoto[]>>(null);

	const handleLoadSections = async () => {
		const data = await getPopularPhotosCategories();

		setSectionsData(data.collections);
	};

	const handleLoadData = async () => {
		const data = await getCuratedPhotos(1);

		console.log("data", data.photos);
		setPhotosData(data.photos);
	};

	const handlePressSubmit = () => {};

	const { isLoading, isEmptyData, handleReset, isError } = useLoadData({
		loadData: handleLoadSections,
		withHandleError: true,
		withEmptyData: true,
	});

	useEffect(() => {
		handleLoadData();
	}, []);

	const headerComponent = () => {
		return (
			<Header>
				<Content>
					<SearchBar
						value={searchValue}
						onSubmit={() => console.log("sdfsf")}
						onChangeText={setSearchValue}
					/>
				</Content>
				{sectionsData && (
					<CategoriesList
						activeCategory={activeCategory}
						onChangeCategory={setActiveCategory}
						data={sectionsData}
					/>
				)}
			</Header>
		);
	};

	return (
		<WithSafeArea>
			<Container>
				<Wrapper>
					<NetworkErrorResponder
						onPress={handleReset}
						isError={isError}
					>
						<PhotosList
							headerComponent={headerComponent}
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
	margin: 0 ${Spacer.MEDIUM}px;
`;

const Header = styled.View`
	padding: 0;
	background: ${(props) => props.theme.backgroundColor};
`;
