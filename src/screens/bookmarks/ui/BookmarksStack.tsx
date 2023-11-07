import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { BookmarksScreens } from "../config";
import { BookmarksScreen } from "./BookmarksScreen";

export type BookmarksStackType = {
	Bookmarks: undefined;
};

const Stack = createStackNavigator<BookmarksStackType>();

export const BookmarksStack = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={BookmarksScreens.BOOKMARKS}
	>
		<Stack.Screen
			name={BookmarksScreens.BOOKMARKS}
			component={BookmarksScreen}
		/>
	</Stack.Navigator>
);
