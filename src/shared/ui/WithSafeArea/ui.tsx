import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import styled from "styled-components/native";

import { Themes } from "../../config/platform";
import { BLACK_COLOR, WHITE_COLOR } from "../../config";

interface IProps {
	children?: React.ReactNode;
}

export const WithSafeArea: React.FC<IProps> = ({ children }) => {
	const deviceTheme = useColorScheme();

	const isDarkMode = deviceTheme === Themes.DARK;

	const barStyle = isDarkMode ? "light-content" : "dark-content";
	const backgroundColor = isDarkMode ? BLACK_COLOR : WHITE_COLOR;
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
