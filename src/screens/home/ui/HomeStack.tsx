import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreens } from "../config";
import { HomeScreen } from "./HomeScreen";

export type HomeStackType = {
	Home: undefined;
};

const Stack = createStackNavigator<HomeStackType>();

export const HomeStack = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<Stack.Screen
			name={HomeScreens.HOME}
			component={HomeScreen}
		/>
	</Stack.Navigator>
);
