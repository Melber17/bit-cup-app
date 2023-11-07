import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackListType } from "../../screens";
import { RootScreens } from "../../screens/config";

export enum TabNavigationScreens {
	HOME = "HomeScreen",
	BOOKMARKS = "BookmarksScreen",
}

export type NavigationType = NativeStackNavigationProp<
	RootStackListType,
	RootScreens.TAB_NAVIGATION
>;
