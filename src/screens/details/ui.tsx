import React from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { RouteProp } from "@react-navigation/native";
import styled from "styled-components/native";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";

import { Container, Text, TopBar, WithSafeArea } from "../../shared/ui";
import { Spacer, Themes } from "../../shared/config";
import { RootStackListType } from "../index";
import { RootScreens } from "../config";
import DownloadIcon from "../../shared/assets/icons/downloadIcon.svg";
import DarkFocusedBookmarkIcon from "../../shared/assets/icons/darkFocusedBookmarkIcon.svg";
import BookmarkIcon from "../../shared/assets/icons/BookmarkIconBlack.svg";
import WhiteBookmarkIcon from "../../shared/assets/icons/WhiteBookmarkIcon.svg";
import FocusedBookMarkIcon from "../../shared/assets/icons/focusedBookmarkIcon.svg";

interface IDetailsScreenProps {
	route: RouteProp<RootStackListType, RootScreens.DETAILS>;
}

export const DetailsScreen: React.FC<IDetailsScreenProps> = ({ route }) => {
	const { data } = route.params;
	const phoneTheme = useColorScheme();
	const { height } = useWindowDimensions();
	const focused = true;

	const getThemeIcon = () => {
		if (phoneTheme === Themes.DARK) {
			if (focused) {
				return <DarkFocusedBookmarkIcon />;
			}

			return <WhiteBookmarkIcon />;
		}

		if (focused) {
			return <FocusedBookMarkIcon />;
		}

		return <BookmarkIcon />;
	};

	return (
		<WithSafeArea>
			<Container>
				<Wrapper>
					<TopBar
						withNavigationBack
						title={data.photographer}
					/>
					<Content>
						<Image
							resizeMode="cover"
							minScale={1}
							maxScale={4}
							source={{ uri: data.src.original }}
							style={{ height: height - 80, backgroundColor: data.avg_color }}
						/>
					</Content>
				</Wrapper>
				<BottomBar>
					<DownloadWrapper>
						<DownloadIcon />
						<DownloadText>Download</DownloadText>
					</DownloadWrapper>
					<FavoriteWrapper>{getThemeIcon()}</FavoriteWrapper>
				</BottomBar>
			</Container>
		</WithSafeArea>
	);
};

const Wrapper = styled.ScrollView`
	margin-top: ${Spacer.MEDIUM}px;
`;

const Content = styled.View`
	margin: ${Spacer.LARGE}px ${Spacer.LARGE}px 0;
`;

const Image = styled(ImageZoom)`
	width: 100%;
	border-radius: ${Spacer.MEDIUM}px;
	margin-bottom: ${Spacer.LARGE}px;
`;

const BottomBar = styled.View`
	margin: ${Spacer.LARGE}px;
	flex-direction: row;
	justify-content: space-between;
`;

const DownloadWrapper = styled.View`
	border-radius: ${Spacer.LARGE}px;
	flex-direction: row;
	width: 180px;
	align-items: center;
	background: ${(props) => props.theme.categoryBackground};
`;

const FavoriteWrapper = styled.View`
	width: 48px;
	height: 48px;
	border-radius: 24px;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.categoryBackground};
`;

const DownloadText = styled(Text)`
	margin-left: 17px;
	color: ${(props) => props.theme.categoryColor};
`;
