import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { Themes } from "../../config/platform";
import {
	PRIMARY_COLOR,
	SAFE_AREA_PRIMARY_COLOR,
	WHITE_COLOR,
} from "../../config";

interface IProps {
	children?: React.ReactNode;
}

export const WithSafeArea: React.FC<IProps> = ({ children }) => {
	const deviceTheme = useColorScheme();

	const isDarkMode = deviceTheme === Themes.DARK;

	const barStyle = isDarkMode ? "light-content" : "dark-content";
	const backgroundColor = isDarkMode ? SAFE_AREA_PRIMARY_COLOR : WHITE_COLOR;
	const handleRenderSafeArea = () => {
		return (
			<SafeArea>
				<StatusBar
					barStyle={barStyle}
					backgroundColor={backgroundColor}
				/>
				{children}
			</SafeArea>
		);
	};

	return <>{handleRenderSafeArea()}</>;
};

const SafeArea = styled.SafeAreaView`
	flex: 1;
`;
