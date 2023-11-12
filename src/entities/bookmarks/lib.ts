import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppDispatch } from "../../app/store";
import { setBookmarks } from "./model";
import { BookmarksKeys } from "./config";
import { IPhoto } from "../photo";

export const getBookmarksData = async (dispatch: AppDispatch) => {
	const data = await AsyncStorage.getItem(BookmarksKeys.BOOKMARKS);

	if (data) {
		dispatch(setBookmarks(JSON.parse(data)));
	}
};

export const setBookmark = async (
	data: Nullable<IPhoto[]>,
	bookmark: IPhoto,
	dispatch: AppDispatch,
) => {
	if (data) {
		const result = [bookmark, ...data];

		dispatch(setBookmarks([bookmark, ...data]));
		await AsyncStorage.setItem(BookmarksKeys.BOOKMARKS, JSON.stringify(result));

		return;
	}

	dispatch(setBookmarks([bookmark]));
	await AsyncStorage.setItem(
		BookmarksKeys.BOOKMARKS,
		JSON.stringify([bookmark]),
	);
};

export const removeBookmark = async (
	data: Nullable<IPhoto[]>,
	bookmark: IPhoto,
	dispatch: AppDispatch,
) => {
	if (data) {
		const result = data.filter((item) => item.id !== bookmark.id);

		dispatch(setBookmarks(result));
		await AsyncStorage.setItem(BookmarksKeys.BOOKMARKS, JSON.stringify(result));
	}
};
