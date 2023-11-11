import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Themes } from "../../config/platform";
import { BLACK_COLOR, WHITE_COLOR } from "../../config";

interface IProps {
	children?: React.ReactNode;
}

export const WithSafeArea: React.FC<IProps> = ({ children }) => {
	const deviceTheme = useColorScheme();
	const insets = useSafeAreaInsets();
	const isDarkMode = deviceTheme === Themes.DARK;

	const barStyle = isDarkMode ? "light-content" : "dark-content";
	const backgroundColor = isDarkMode ? BLACK_COLOR : WHITE_COLOR;
	const handleRenderSafeArea = () => {
		return (
			<SafeArea
				paddingTop={insets.top}
				backgroundColor={backgroundColor}
			>
				<StatusBar
					barStyle={barStyle}
					translucent
					backgroundColor={backgroundColor}
				/>
				{children}
			</SafeArea>
		);
	};

	return <>{handleRenderSafeArea()}</>;
};

const SafeArea = styled.View<{
	backgroundColor: string;
	paddingTop: number;
}>`
	flex: 1;
	padding-top: ${({ paddingTop }) => paddingTop}px;
`;
