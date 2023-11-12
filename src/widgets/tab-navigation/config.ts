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

export const animationConfig = {
	damping: 25,
	mass: 1,
	stiffness: 150,
	overshootClamping: false,
	restSpeedThreshold: 0.001,
	restDisplacementThreshold: 0.001,
};
