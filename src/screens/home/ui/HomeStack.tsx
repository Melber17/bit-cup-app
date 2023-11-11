import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreens } from "../config";
import { HomeScreen } from "./HomeScreen";
import { IPhoto } from "../../../entities/photo";

export type HomeStackType = {
	Home: undefined;
	Details: { data: IPhoto };
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
