import { darkThemeStyles } from "./src/shared/config";

type ThemeInterface = typeof darkThemeStyles;

declare module "styled-components" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends ThemeInterface {}
}
