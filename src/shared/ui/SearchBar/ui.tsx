import React from "react";
import styled from "styled-components/native";
import { TextInput, useColorScheme } from "react-native";

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
	value: string;
	onChangeText: (value: string) => void;
	onSubmit: () => void;
	inputRef: React.RefObject<TextInput>;
}

export const SearchBar: React.FC<ISearchBarProps> = (props) => {
	const { onChangeText, inputRef, value, onSubmit } = props;
	const isDarkTheme = useColorScheme() === Themes.DARK;

	const onPressCross = () => {
		inputRef.current?.clear();
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
			<SearchIcon />
			<Input
				placeholder="Search"
				ref={inputRef}
				maxLength={50}
				placeholderTextColor={
					isDarkTheme ? SEARCH_BAR_DARK_TEXT : SEARCH_BAR_LIGHT_TEXT
				}
				defaultValue={value}
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
