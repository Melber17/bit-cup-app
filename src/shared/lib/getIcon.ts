import { ColorSchemeName } from "react-native";

import { Themes } from "../config";

export const getThemeIcon = (
	phoneTheme: ColorSchemeName,
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
