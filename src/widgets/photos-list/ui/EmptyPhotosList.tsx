import React from "react";
import styled from "styled-components/native";

import { Text } from "../../../shared/ui";
import { FontStyles, RED_COLOR, Spacer } from "../../../shared/config";

interface IEmptyPhotosListProps {
	onPress: () => void;
	title?: string;
}

export const EmptyPhotosList: React.FC<IEmptyPhotosListProps> = ({
	onPress,
	title = "No results found",
}) => {
	return (
		<Container>
			<NoDataText fontStyle={FontStyles.MEDIUM}>{title}</NoDataText>
			<Button onPress={onPress}>
				<Title fontStyle={FontStyles.BOLD}>Explore</Title>
			</Button>
		</Container>
	);
};

const Container = styled.View`
	justify-content: center;
	flex: 1;
	margin-top: 75%;
	align-items: center;
`;

const Button = styled.TouchableOpacity`
	margin-top: ${Spacer.SECONDARY}px;
`;

const NoDataText = styled(Text)`
	color: ${(props) => props.theme.categoryColor};
`;

const Title = styled(Text)`
	color: ${RED_COLOR};
	font-size: 18px;
`;
