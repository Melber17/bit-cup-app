import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { FontStyles, Spacer, Themes } from "../../config";
import { Text } from "../Text/ui";
import BackIcon from "../../assets/icons/backIcon.svg";
import BackIconDark from "../../assets/icons/backIconDark.svg";

interface ITopBarProps {
	title: string;
	goBack?: () => void;
	withNavigationBack?: boolean;
}

export const TopBar: React.FC<ITopBarProps> = (props) => {
	const { title, withNavigationBack, goBack } = props;
	const deviceTheme = useColorScheme();
	const navigation = useNavigation();

	const handleGoBack = () => {
		if (goBack) {
			goBack();

			return;
		}
		navigation.goBack();
	};

	return (
		<Wrapper>
			{withNavigationBack && (
				<IconWrapper onPress={handleGoBack}>
					{deviceTheme === Themes.DARK ? <BackIconDark /> : <BackIcon />}
				</IconWrapper>
			)}
			<Title fontStyle={FontStyles.BOLD}>{title}</Title>
		</Wrapper>
	);
};

const Wrapper = styled.View`
	width: 100%;
	height: 46px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const IconWrapper = styled.TouchableOpacity`
	position: absolute;
	left: ${Spacer.LARGE}px;
`;

const Title = styled(Text)`
	color: ${(props) => props.theme.categoryColor};
`;
