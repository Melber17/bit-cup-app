import { instance } from "../../shared/api";

export const MAX_LIMIT = 40;

export const getPopularPhotosCategories = async () => {
	const response = await instance.get(`collections/featured?page=1&per_page=7`);

	return response.data;
};

export const getCuratedPhotos = async (page: number) => {
	const response = await instance.get(`curated?page=${page}&per_page=30`);

	return response.data;
};
