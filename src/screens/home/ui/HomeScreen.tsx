import React, { useState } from "react";

import { WithSafeArea } from "../../../shared/ui/WithSafeArea";
import { Container, NetworkErrorResponder, Text } from "../../../shared/ui";
import { useLoadData } from "../../../shared/lib";
import {
	IProductCategory,
	getPopularProductsCategories,
} from "../../../entities/products";

export const HomeScreen: React.FC = () => {
	const [sectionsData, setSectionsData] =
		useState<Nullable<IProductCategory[]>>();

	const handleLoadData = async () => {
		const data = await getPopularProductsCategories();

		setSectionsData(data);
	};

	const { isLoading, isEmptyData, isError } = useLoadData({
		loadData: handleLoadData,
		withHandleError: true,
		withEmptyData: true,
	});

	return (
		<WithSafeArea>
			<Container>
				<NetworkErrorResponder
					onPress={() => {}}
					isError={true}
				>
					<></>
				</NetworkErrorResponder>
			</Container>
		</WithSafeArea>
	);
};
