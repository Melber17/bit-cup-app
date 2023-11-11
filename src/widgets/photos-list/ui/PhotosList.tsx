import React from "react";
import {
	FlatList,
	ListRenderItemInfo,
	useWindowDimensions,
} from "react-native";

import { IPhoto } from "../../../entities/photo";
import { PhotoItem } from "./PhotoItem";
import { Spacer } from "../../../shared/config";

interface IPhotosListProps {
	data: Nullable<IPhoto[]>;
	headerComponent?: () => JSX.Element;
	emptyListComponent: () => JSX.Element;
}

export const PhotosList: React.FC<IPhotosListProps> = ({
	data,
	emptyListComponent,
	headerComponent,
}) => {
	const keyExtractor = (_: IPhoto, index: number) => index.toString();
	const { width } = useWindowDimensions();
	const photoWidth = (width - Spacer.EXTRA_LARGE - Spacer.MEDIUM) / 2;

	const renderItem = ({ item }: ListRenderItemInfo<IPhoto>) => {
		return (
			<PhotoItem
				width={photoWidth}
				data={item}
			/>
		);
	};

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			numColumns={2}
			ListFooterComponent={<></>}
			ListEmptyComponent={emptyListComponent}
			ListFooterComponentStyle={{ marginBottom: 150 }}
			keyExtractor={keyExtractor}
			ListHeaderComponent={headerComponent}
			contentContainerStyle={{
				marginTop: Spacer.MEDIUM,
			}}
		/>
	);
};
