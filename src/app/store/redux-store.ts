import { configureStore } from "@reduxjs/toolkit";

import { bookmarksSlice } from "../../entities/bookmarks";
import { photosSlice } from "../../entities/photo";

export const store = configureStore({
	reducer: {
		bookmarks: bookmarksSlice.reducer,
		photos: photosSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
