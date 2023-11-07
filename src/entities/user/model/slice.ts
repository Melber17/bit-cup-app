import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	isLoggedIn: false,
	isAdmin: false,
	id: null as number | null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setPhoneNumber: (state, action: PayloadAction<string>) => {
			state.phoneNumber = action.payload;
		},
		setFirstName: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload;
		},
		setLastName: (state, action: PayloadAction<string>) => {
			state.lastName = action.payload;
		},

		setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.isLoggedIn = action.payload;
		},

		setIsAdmin: (state, action: PayloadAction<boolean>) => {
			state.isAdmin = action.payload;
		},
		setId: (state, action: PayloadAction<Nullable<number>>) => {
			state.id = action.payload;
		},
	},
});

export const {
	setPhoneNumber,
	setFirstName,
	setLastName,
	setIsLoggedIn,
	setIsAdmin,
	setId,
} = userSlice.actions;
