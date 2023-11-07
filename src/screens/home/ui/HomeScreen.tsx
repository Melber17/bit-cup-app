import React from "react";

import { WithSafeArea } from "../../../shared/ui/WithSafeArea";
import { Container, Text } from "../../../shared/ui";

export const HomeScreen: React.FC = () => {
	return (
		<WithSafeArea>
			<Container>
				<Text>Text</Text>
			</Container>
		</WithSafeArea>
	);
};
