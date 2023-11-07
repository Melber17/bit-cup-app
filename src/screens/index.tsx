import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import SplashScreen from "react-native-splash-screen";

import { RootScreens } from "./config";
import { HomeScreen } from "./home";

export type RootStackListType = {
	HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackListType>();

export const Routing: React.FC = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Container>
			<Stack.Navigator
				initialRouteName={RootScreens.HOME}
				// screenOptions={{
				// 	headerShown: false,
				// }}
			>
				<Stack.Screen
					name={RootScreens.HOME}
					component={HomeScreen}
				/>
			</Stack.Navigator>
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	position: relative;
`;
