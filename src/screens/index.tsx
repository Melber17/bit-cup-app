import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import styled from "styled-components/native";
import { useColorScheme } from "react-native";

import { RootScreens } from "./config";
import { TabNavigation } from "../widgets/tab-navigation";
import { DetailsScreen } from "./details";
import { IPhoto } from "../entities/photo";
import { BLACK_COLOR, Themes, WHITE_COLOR } from "../shared/config";

export type RootStackListType = {
	TabNavigation: undefined;
	Details: { data: IPhoto };
};

const Stack = createNativeStackNavigator<RootStackListType>();

export const Routing: React.FC = () => {
	const isDarkMode = useColorScheme() === Themes.DARK;

	useEffect(() => {
		SplashScreen.hide();
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

const Container = styled.View`
	flex: 1;
	position: relative;
`;
