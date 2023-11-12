import React from "react";
import styled from "styled-components/native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { IPhoto } from "../../../entities/photo";
import { Spacer, WHITE_COLOR } from "../../../shared/config";
import { NavigationType } from "../../tab-navigation";
import { RootScreens } from "../../../screens/config";
import { Text } from "../../../shared/ui";

interface IPhotoItemProps {
	data: IPhoto;
	width: number;
	withPhotographerInfo?: boolean;
}

export const PhotoItem: React.FC<IPhotoItemProps> = ({
	data,
	withPhotographerInfo = false,
	width,
}) => {
	const navigation = useNavigation<NavigationType>();
	const handlePress = () => {
		navigation.navigate(RootScreens.DETAILS, { data });
	};

	return (
		<Button
			width={width}
			height={data.height}
			onPress={handlePress}
		>
			<Container
				entering={FadeIn}
				source={{ uri: data.src.large }}
				width={width}
				height={data.height}
				resizeMode="cover"
				background={data.avg_color}
			/>
			{withPhotographerInfo && (
				<PhotoGrapherInfo>
					<Text color={WHITE_COLOR}>{data.photographer}</Text>
				</PhotoGrapherInfo>
			)}
		</Button>
	);
};

const Container = styled(Animated.Image)<{
	background: string;
	width: number;
	height: number;
}>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	max-height: 280px;
	background: ${({ background }) => background};
	border-radius: 20px;
`;

const Button = styled.TouchableOpacity<{ width: number; height: number }>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	max-height: 280px;
	margin-bottom: ${Spacer.MEDIUM}px;
	border-radius: 20px;
`;

const PhotoGrapherInfo = styled.View`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 43px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	background: rgba(0, 0, 0, 0.4);
	justify-content: center;
	align-items: center;
`;
