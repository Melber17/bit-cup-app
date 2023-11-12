import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPhoto } from "../../photo";

const initialState = {
	bookmarksData: null as IPhoto[] | null,
};

export const bookmarksSlice = createSlice({
	name: "bookmarks",
	initialState,
	reducers: {
		setBookmarks: (state, action: PayloadAction<IPhoto[]>) => {
			state.bookmarksData = action.payload;
		},
	},
});

export const { setBookmarks } = bookmarksSlice.actions;
