import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React from "react";

interface IProps {
	children: React.ReactNode;
}

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
	},
};

export const WithNavigation: React.FC<IProps> = ({ children }) => (
	<NavigationContainer theme={MyTheme}>{children}</NavigationContainer>
);
