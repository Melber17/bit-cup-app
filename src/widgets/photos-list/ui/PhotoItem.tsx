import React from "react";
import styled from "styled-components/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { IPhoto } from "../../../entities/photo";
import { Spacer } from "../../../shared/config";

interface IPhotoItemProps {
	data: IPhoto;
	width: number;
}

export const PhotoItem: React.FC<IPhotoItemProps> = ({ data, width }) => {
	return (
		<Button
			width={width}
			height={data.height}
		>
			<Container
				entering={FadeIn}
				source={{ uri: data.src.large }}
				width={width}
				height={data.height}
				resizeMode="cover"
				background={data.avg_color}
			/>
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
	margin-left: ${Spacer.MEDIUM}px;
	margin-bottom: ${Spacer.MEDIUM}px;
	border-radius: 20px;
`;
