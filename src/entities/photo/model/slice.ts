import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPhoto, IPhotoCategory } from "../../photo";

const initialState = {
	photosData: null as IPhoto[] | null,
	categoriesData: null as IPhotoCategory[] | null,
};

export const photosSlice = createSlice({
	name: "photos",
	initialState,
	reducers: {
		setPhotosData: (state, action: PayloadAction<IPhoto[]>) => {
			state.photosData = action.payload;
		},
		setCategoriesData: (state, action: PayloadAction<IPhotoCategory[]>) => {
			state.categoriesData = action.payload;
		},
	},
});

export const { setPhotosData, setCategoriesData } = photosSlice.actions;
