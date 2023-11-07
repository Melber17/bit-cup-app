import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import {
	WHITE_COLOR,
	FontStyles,
	Spacer,
	Themes,
	BLACK_90_COLOR,
} from "../../config";
import { Text } from "../Text/ui";
import { BackArrowIcon } from "../../assets/icons/BackArrowIcon";

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
					<BackArrowIcon
						color={deviceTheme === Themes.DARK ? WHITE_COLOR : BLACK_90_COLOR}
					/>
				</IconWrapper>
			)}
			<Text
				fontStyle={FontStyles.BOLD}
				color={WHITE_COLOR}
			>
				{title}
			</Text>
		</Wrapper>
	);
};

const Wrapper = styled.View`
	width: 100%;
	height: 46px;
	background: ${(props) => props.theme.background};
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const IconWrapper = styled.TouchableOpacity`
	position: absolute;
	left: ${Spacer.MEDIUM}px;
`;
