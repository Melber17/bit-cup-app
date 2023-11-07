import React, { useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import { WithNavigation, WithRedux } from "./providers";
import { darkThemeStyles, lightThemeStyles } from "../shared/config/themes";
import { Routing } from "../screens";

export const App: React.FC = () => {
	const deviceTheme = useColorScheme();

	const appTheme = deviceTheme === "dark" ? darkThemeStyles : lightThemeStyles;

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<WithRedux>
			<GestureHandlerRootView style={styles.container}>
				<ThemeProvider theme={appTheme}>
					<SafeAreaProvider>
						<WithNavigation>
							<Routing />
						</WithNavigation>
					</SafeAreaProvider>
				</ThemeProvider>
			</GestureHandlerRootView>
		</WithRedux>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
