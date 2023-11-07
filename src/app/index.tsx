import React, { useEffect } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import { WithSafeArea } from "../shared/ui";
import { WithNavigation, WithRedux } from "./providers";
import { darkThemeStyles, lightThemeStyles } from "../shared/config/themes";

export const App: React.FC = () => {
	const deviceTheme = useColorScheme();

	const appTheme = deviceTheme === "dark" ? darkThemeStyles : lightThemeStyles;

	console.log(deviceTheme);
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<WithRedux>
			<GestureHandlerRootView style={styles.container}>
				<ThemeProvider theme={appTheme}>
					<SafeAreaProvider>
						<WithNavigation>
							<WithSafeArea>
								<View></View>
							</WithSafeArea>
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
