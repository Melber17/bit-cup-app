import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppDispatch } from "../../app/store";
import { setCategoriesData, setPhotosData } from "./model";
import { PhotosKeys } from "./config";
import { IPhoto, IPhotoCategory } from "../photo";

export const getPopularPhotos = async (dispatch: AppDispatch) => {
	const data = await AsyncStorage.getItem(PhotosKeys.PHOTOS);

	if (data) {
		dispatch(setPhotosData(JSON.parse(data)));
	}
};

export const setPhotos = async (photos: IPhoto[], dispatch: AppDispatch) => {
	dispatch(setPhotosData(photos));
	await AsyncStorage.setItem(PhotosKeys.PHOTOS, JSON.stringify(photos));

	return;
};

export const getCategories = async (dispatch: AppDispatch) => {
	const data = await AsyncStorage.getItem(PhotosKeys.CATEGORIES);

	if (data) {
		dispatch(setCategoriesData(JSON.parse(data)));
	}
};

export const setCategories = async (
	categories: IPhotoCategory[],
	dispatch: AppDispatch,
) => {
	dispatch(setCategoriesData(categories));
	await AsyncStorage.setItem(PhotosKeys.CATEGORIES, JSON.stringify(categories));

	return;
};
