import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import styled from "styled-components/native";

import { RootScreens } from "./config";
import { TabNavigation } from "../widgets/tab-navigation";

export type RootStackListType = {
	TabNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackListType>();

export const Routing: React.FC = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Container>
			<Stack.Navigator
				initialRouteName={RootScreens.TAB_NAVIGATION}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name={RootScreens.TAB_NAVIGATION}
					component={TabNavigation}
				/>
			</Stack.Navigator>
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	position: relative;
`;
