import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, useColorScheme } from "react-native";

import {
	BLACK_COLOR,
	SEARCH_BAR_DARK_TEXT,
	SEARCH_BAR_LIGHT_TEXT,
	Spacer,
	Themes,
	WHITE_COLOR,
} from "../../config";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import CrossIcon from "../../assets/icons/crossIcon.svg";
import CrossIconLight from "../../assets/icons/crossIconLight.svg";

interface ISearchBarProps {
	defaultValue?: string;
	value: string;
	onChangeText: (value: string) => void;
	onSubmit: () => void;
}

export const SearchBar: React.FC<ISearchBarProps> = (props) => {
	const isDarkTheme = useColorScheme() === Themes.DARK;
	const { onChangeText, value, onSubmit, defaultValue } = props;

	const onPressCross = () => {
		onChangeText("");
	};

	const handleGetCrossIcon = () => {
		if (value.length) {
			if (isDarkTheme) {
				return (
					<CrossWrapper onPress={onPressCross}>
						<CrossIconLight />
					</CrossWrapper>
				);
			}

			return (
				<CrossWrapper onPress={onPressCross}>
					<CrossIcon />
				</CrossWrapper>
			);
		}
	};

	return (
		<Wrapper>
			<TouchableOpacity onPress={onSubmit}>
				<SearchIcon />
			</TouchableOpacity>

			<Input
				placeholder="Search"
				maxLength={50}
				placeholderTextColor={
					isDarkTheme ? SEARCH_BAR_DARK_TEXT : SEARCH_BAR_LIGHT_TEXT
				}
				defaultValue={defaultValue}
				onChangeText={onChangeText}
				onSubmitEditing={onSubmit}
				style={{
					color: isDarkTheme ? WHITE_COLOR : BLACK_COLOR,
				}}
			/>
			{handleGetCrossIcon()}
		</Wrapper>
	);
};

const Wrapper = styled.View`
	width: 100%;
	height: 50px;
	flex-direction: row;
	border-radius: 50px;
	align-items: center;
	padding: 0 ${Spacer.MEDIUM}px;
	background: ${(props) => props.theme.searchBarBackground};
`;

const Input = styled.TextInput`
	margin-left: ${Spacer.SECONDARY}px;
	font-size: 14px;
`;

const CrossWrapper = styled.TouchableOpacity`
	margin-left: auto;
`;
