import React from "react";
import styled from "styled-components/native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useColorScheme, useWindowDimensions } from "react-native";

import { FontStyles, RED_COLOR, Spacer, Themes } from "../../../config";
import { Text } from "../../Text";
import NoNetworkIcon from "../../../assets/icons/NoNetworkIcon.svg";
import NoNetworkIconLight from "../../../assets/icons/NoNetworkLight.svg";

interface INetworkErrorContentProps {
	onPress: () => void;
}

const NetworkErrorContent: React.FC<INetworkErrorContentProps> = ({
	onPress,
}) => {
	const deviceTheme = useColorScheme();
	const { height } = useWindowDimensions();

	return (
		<Content
			height={height}
			entering={FadeInDown}
		>
			<Container>
				{deviceTheme === Themes.DARK ? (
					<NoNetworkIconLight />
				) : (
					<NoNetworkIcon />
				)}
				<Button onPress={onPress}>
					<Title fontStyle={FontStyles.BOLD}>Try Again</Title>
				</Button>
				<Button></Button>
			</Container>
		</Content>
	);
};

export default React.memo(NetworkErrorContent);

const Container = styled.View`
	flex: 1;
	margin: ${Spacer.EXTRA_LARGE}px ${Spacer.MEDIUM}px;
	justify-content: center;
	align-items: center;
`;

const Content = styled(Animated.View)<{ height: number }>`
	flex: 1;
	height: ${({ height }) => height / 1.2}px;
`;

const Button = styled.TouchableOpacity`
	margin-top: ${Spacer.LARGE}px;
`;

const Title = styled(Text)`
	color: ${RED_COLOR};
`;
