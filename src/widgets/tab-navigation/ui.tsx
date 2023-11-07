import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";

import { TabNavigationScreens } from "./config";
import { BLACK_COLOR, Spacer, Themes, WHITE_COLOR } from "../../shared/config";
import HomeIcon from "../../shared/assets/icons/homeIcon.svg";
import FocusedHomeIcon from "../../shared/assets/icons/homeIconFocused.svg";
import DarkFocusedHomeIcon from "../../shared/assets/icons/darkFocusedHomeIcon.svg";
import DarkFocusedBookmarkIcon from "../../shared/assets/icons/darkFocusedBookmarkIcon.svg";
import BookmarkIcon from "../../shared/assets/icons/bookmarkIcon.svg";
import FocusedBookMarkIcon from "../../shared/assets/icons/focusedBookmarkIcon.svg";
import { HomeStack } from "../../screens/home";
import { BookmarksStack } from "../../screens/bookmarks";

export type TabStackType = {
	HomeScreen: undefined;
	BookmarksScreen: undefined;
};

const Tab = createBottomTabNavigator<TabStackType>();

export const TabNavigation = () => {
	const phoneTheme = useColorScheme();
	const insets = useSafeAreaInsets();

	const getCurrentIcon = (
		focused: boolean,
		icon: JSX.Element,
		focusedIcon: JSX.Element,
		focusedDarkIcon: JSX.Element,
	) => {
		if (phoneTheme === Themes.DARK) {
			if (focused) {
				return focusedDarkIcon;
			}

			return icon;
		}

		if (focused) {
			return focusedIcon;
		}

		return icon;
	};

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					switch (route.name) {
						case TabNavigationScreens.HOME:
							return (
								<>
									{getCurrentIcon(
										focused,
										<HomeIcon />,
										<FocusedHomeIcon />,
										<DarkFocusedHomeIcon />,
									)}
								</>
							);
						case TabNavigationScreens.BOOKMARKS:
							return (
								<>
									{getCurrentIcon(
										focused,
										<BookmarkIcon />,
										<FocusedBookMarkIcon />,
										<DarkFocusedBookmarkIcon />,
									)}
								</>
							);
					}
				},
				tabBarLabel: () => null,
				tabBarStyle: {
					justifyContent: "center",
					paddingTop: Spacer.SMALL,
					borderTopWidth: 0,
					backgroundColor:
						phoneTheme === Themes.DARK ? BLACK_COLOR : WHITE_COLOR,
					height: insets.bottom + 64,
				},
				tabBarLabelPosition: "below-icon",
				headerShown: false,
			})}
			initialRouteName={TabNavigationScreens.HOME}
		>
			<Tab.Screen
				name={TabNavigationScreens.HOME}
				component={HomeStack}
			/>
			<Tab.Screen
				name={TabNavigationScreens.BOOKMARKS}
				component={BookmarksStack}
			/>
		</Tab.Navigator>
	);
};
