import React from "react";
import styled from "styled-components/native";

import { IPhotoCategory } from "../../entities/photo";
import {
	FontStyles,
	RED_COLOR,
	Spacer,
	WHITE_COLOR,
} from "../../shared/config";
import { Text } from "../../shared/ui";

interface ICategoriesListProps {
	data: IPhotoCategory[];
	activeCategory: Nullable<IPhotoCategory>;
	onChangeCategory: (category: IPhotoCategory) => void;
}

export const CategoriesList: React.FC<ICategoriesListProps> = (props) => {
	const { data, activeCategory, onChangeCategory } = props;

	return (
		<Container
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{data.map((item, index) => {
				const isActive = item.id === activeCategory?.id;

				return (
					<Category
						key={index}
						onPress={() => onChangeCategory(item)}
						isActive={isActive}
					>
						<CategoryTitle
							isActive={isActive}
							fontStyle={isActive ? FontStyles.BOLD : FontStyles.REGULAR}
						>
							{item.title}
						</CategoryTitle>
					</Category>
				);
			})}
		</Container>
	);
};

const Container = styled.ScrollView`
	margin-top: ${Spacer.LARGE}px;
	padding: 0 ${Spacer.LARGE}px;
	margin-bottom: ${Spacer.MEDIUM}px;
	min-height: 40px;
`;

const Category = styled.TouchableOpacity<{ isActive: boolean }>`
	padding: 0 20px;
	min-height: 40px;
	border-radius: 50px;
	margin-right: 11px;
	justify-content: center;
	align-items: center;
	background: ${(props) => {
		if (props.isActive) {
			return RED_COLOR;
		}

		return props.theme.categoryBackground;
	}};
`;

const CategoryTitle = styled(Text)<{ isActive: boolean }>`
	color: ${(props) => {
		if (props.isActive) {
			return WHITE_COLOR;
		}

		return props.theme.categoryColor;
	}};
`;
