import { instance } from "../../shared/api";

export const MAX_LIMIT = 40;

export const getPopularProductsCategories = async () => {
	const response = await instance.get(`collections/featured?page=1&per_page=7`);

	return response.data;
};
