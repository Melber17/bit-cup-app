import { TabBarLabelValues, TabNavigationScreens } from "./config";

export const handleDisplayTabBarLabel = (name: string): string => {
	switch (name) {
		case TabNavigationScreens.CATALOG:
			return TabBarLabelValues.CATALOG;
		case TabNavigationScreens.HISTORY:
			return TabBarLabelValues.HISTORY;
		case TabNavigationScreens.PROFILE:
			return TabBarLabelValues.PROFILE;
	}

	return TabNavigationScreens.CATALOG;
};
