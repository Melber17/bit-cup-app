import { BLACK_COLOR, RED_COLOR, WHITE_COLOR } from "./colors";

export const darkThemeStyles = {
	backgroundColor: BLACK_COLOR,
	color: RED_COLOR,
};

export const lightThemeStyles = {
	backgroundColor: WHITE_COLOR,
	color: BLACK_COLOR,
};

export type ThemeType = typeof darkThemeStyles;
