import React from "react";

import { WithSafeArea } from "../../../shared/ui/WithSafeArea";
import { TopBar } from "../../../shared/ui";

export const HomeScreen: React.FC = () => {
	return (
		<WithSafeArea>
			<TopBar title="Home" />
		</WithSafeArea>
	);
};
