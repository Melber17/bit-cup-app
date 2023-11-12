import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import { useColorScheme } from "react-native";

import { RootScreens } from "./config";
import { TabNavigation } from "../widgets/tab-navigation";
import { DetailsScreen } from "./details";
import { IPhoto, getCategories, getPopularPhotos } from "../entities/photo";
import { BLACK_COLOR, Themes, WHITE_COLOR } from "../shared/config";
import { Container } from "../shared/ui";
import { useAppDispatch } from "../shared/lib";
import { getBookmarksData } from "../entities/bookmarks";

export type RootStackListType = {
	TabNavigation: { screen: string };
	Details: { data: IPhoto };
};

const Stack = createNativeStackNavigator<RootStackListType>();

export const Routing: React.FC = () => {
	const isDarkMode = useColorScheme() === Themes.DARK;
	const dispatch = useAppDispatch();
	const launchApp = async () => {
		await getBookmarksData(dispatch);
		await getPopularPhotos(dispatch);
		await getCategories(dispatch);
		SplashScreen.hide();
	};

	useEffect(() => {
		launchApp();
	}, []);

	return (
		<Container>
			<Stack.Navigator
				initialRouteName={RootScreens.TAB_NAVIGATION}
				screenOptions={{
					headerShown: false,
					navigationBarColor: isDarkMode ? BLACK_COLOR : WHITE_COLOR,
				}}
			>
				<Stack.Screen
					name={RootScreens.TAB_NAVIGATION}
					component={TabNavigation}
				/>
				<Stack.Screen
					name={RootScreens.DETAILS}
					component={DetailsScreen}
				/>
			</Stack.Navigator>
		</Container>
	);
};
