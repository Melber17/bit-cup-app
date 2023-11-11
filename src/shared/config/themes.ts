import {
	BLACK_COLOR,
	DARK_GRAY_COLOR,
	LIGHT_GRAY_COLOR,
	RED_COLOR,
	SEARCH_BAR_DARK_BACKGROUND,
	SEARCH_BAR_DARK_TEXT,
	SEARCH_BAR_LIGHT_BACKGROUND,
	SEARCH_BAR_LIGHT_TEXT,
	WHITE_COLOR,
} from "./colors";

export const darkThemeStyles = {
	backgroundColor: BLACK_COLOR,
	color: RED_COLOR,
	searchBarBackground: SEARCH_BAR_DARK_BACKGROUND,
	searchBarText: SEARCH_BAR_DARK_TEXT,
	categoryBackground: DARK_GRAY_COLOR,
	categoryColor: WHITE_COLOR,
};

export const lightThemeStyles = {
	backgroundColor: WHITE_COLOR,
	color: BLACK_COLOR,
	searchBarBackground: SEARCH_BAR_LIGHT_BACKGROUND,
	searchBarText: SEARCH_BAR_LIGHT_TEXT,
	categoryBackground: LIGHT_GRAY_COLOR,
	categoryColor: BLACK_COLOR,
};

export type ThemeType = typeof darkThemeStyles;
