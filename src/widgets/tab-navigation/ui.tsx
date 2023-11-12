import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, useColorScheme, useWindowDimensions } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { TabNavigationScreens, animationConfig } from "./config";
import {
	BLACK_COLOR,
	RED_COLOR,
	Spacer,
	Themes,
	WHITE_COLOR,
} from "../../shared/config";
import HomeIcon from "../../shared/assets/icons/homeIcon.svg";
import FocusedHomeIcon from "../../shared/assets/icons/homeIconFocused.svg";
import DarkFocusedHomeIcon from "../../shared/assets/icons/darkFocusedHomeIcon.svg";
import DarkFocusedBookmarkIcon from "../../shared/assets/icons/darkFocusedBookmarkIcon.svg";
import BookmarkIcon from "../../shared/assets/icons/bookmarkIcon.svg";
import FocusedBookMarkIcon from "../../shared/assets/icons/focusedBookmarkIcon.svg";
import { HomeStack } from "../../screens/home";
import { BookmarksStack } from "../../screens/bookmarks";
import { getThemeIcon } from "../../shared/lib";
import { Container } from "../../shared/ui";
import { getWidth } from "./lib";

export type TabStackType = {
	HomeScreen: undefined;
	BookmarksScreen: undefined;
};

const INITIAL_INDEX = 86;

const Tab = createBottomTabNavigator<TabStackType>();

export const TabNavigation = () => {
	const phoneTheme = useColorScheme();
	const insets = useSafeAreaInsets();
	const activeIndex = useSharedValue(0);
	const { width } = useWindowDimensions();
	const isFocusedSharedValue = useSharedValue(INITIAL_INDEX);
	const homeXCoordinate = React.useRef(INITIAL_INDEX);

	const handlePressTabBar = (index: number) => {
		"worklet";
		if (activeIndex.value === index) {
			return;
		}

		activeIndex.value = index;
		switch (index) {
			case 0:
				isFocusedSharedValue.value = withSpring(
					homeXCoordinate.current,
					animationConfig,
				);
				break;
			case 1:
				isFocusedSharedValue.value = withSpring(
					width / 2 + homeXCoordinate.current,
					animationConfig,
				);
				break;
		}
	};

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateX: isFocusedSharedValue.value }],
	}));

	return (
		<Container>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused }) => {
						switch (route.name) {
							case TabNavigationScreens.HOME:
								return (
									<View
										onLayout={(event) => {
											const layout = event.nativeEvent.layout;

											homeXCoordinate.current = layout.x;

											isFocusedSharedValue.value = layout.x;
										}}
									>
										{getThemeIcon(
											phoneTheme,
											focused,
											<HomeIcon />,
											<FocusedHomeIcon />,
											<DarkFocusedHomeIcon />,
										)}
									</View>
								);
							case TabNavigationScreens.BOOKMARKS:
								return (
									<View>
										{getThemeIcon(
											phoneTheme,
											focused,
											<BookmarkIcon />,
											<FocusedBookMarkIcon />,
											<DarkFocusedBookmarkIcon />,
										)}
									</View>
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
					navigationBarColor:
						phoneTheme === Themes.DARK ? BLACK_COLOR : WHITE_COLOR,
					tabBarLabelPosition: "below-icon",
					headerShown: false,
				})}
				initialRouteName={TabNavigationScreens.HOME}
			>
				<Tab.Screen
					name={TabNavigationScreens.HOME}
					component={HomeStack}
					listeners={() => ({
						tabPress: () => handlePressTabBar(0),
					})}
				/>
				<Tab.Screen
					name={TabNavigationScreens.BOOKMARKS}
					component={BookmarksStack}
					listeners={() => ({
						tabPress: () => handlePressTabBar(1),
					})}
				/>
			</Tab.Navigator>
			<Line
				style={animatedStyles}
				width={getWidth(width)}
			/>
		</Container>
	);
};

const Line = styled(Animated.View)<{ width: number }>`
	width: 24px;
	height: 2px;
	background-color: ${RED_COLOR};
	border-radius: 28px;
	position: absolute;
	bottom: 77.5px;
`;
