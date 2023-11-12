import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { TopBar, WithSafeArea } from "../../../shared/ui";
import { EmptyPhotosList, PhotosList } from "../../../widgets/photos-list";
import { useAppSelector } from "../../../shared/lib";
import {
	NavigationType,
	TabNavigationScreens,
} from "../../../widgets/tab-navigation/config";
import { RootScreens } from "../../config";

export const BookmarksScreen: React.FC = () => {
	const { bookmarksData } = useAppSelector((store) => store.bookmarks);
	const navigation = useNavigation<NavigationType>();

	const handleNavigateToExplore = () => {
		navigation.navigate(RootScreens.TAB_NAVIGATION, {
			screen: TabNavigationScreens.HOME,
		});
	};

	const emptyListComponent = () => {
		return (
			<EmptyPhotosList
				title="You haven't saved anything yet"
				onPress={handleNavigateToExplore}
			/>
		);
	};

	return (
		<WithSafeArea>
			<Wrapper>
				<TopBar title="Bookmarks" />
				<PhotosList
					emptyListComponent={emptyListComponent}
					data={bookmarksData}
					withPhotographerInfo
				/>
			</Wrapper>
		</WithSafeArea>
	);
};

const Wrapper = styled.View`
	flex: 1;
`;
