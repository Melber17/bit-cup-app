import React from "react";
import styled from "styled-components/native";

import { Text } from "../../../shared/ui";
import { FontStyles, RED_COLOR, Spacer } from "../../../shared/config";

interface IEmptyPhotosListProps {
	onPress: () => void;
}

export const EmptyPhotosList: React.FC<IEmptyPhotosListProps> = ({
	onPress,
}) => {
	return (
		<Container>
			<NoDataText fontStyle={FontStyles.MEDIUM}>No results found</NoDataText>
			<Button onPress={onPress}>
				<Title fontStyle={FontStyles.BOLD}>Explore</Title>
			</Button>
		</Container>
	);
};

const Container = styled.View`
	justify-content: center;
	margin: auto;
	align-items: center;
	margin-top: 220px;
`;

const Button = styled.TouchableOpacity`
	margin-top: ${Spacer.LARGE}px;
`;

const NoDataText = styled(Text)`
	color: ${(props) => props.theme.categoryColor};
`;

const Title = styled(Text)`
	color: ${RED_COLOR};
	font-size: 18px;
`;
