import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	RootState,
	StoreDispatch,
	UserObject,
	UsersState,
} from '@global/types';
import { getAllUsers } from '@global/api';

const initialState: UsersState = {
	data: [],
};

// Reducer
const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchUsers: (state, action: PayloadAction<UserObject[]>) => {
			state.data = action.payload;
		},
	},
});

export const { fetchUsers } = usersSlice.actions;
export default usersSlice.reducer;

export const getUsers = () => async (dispatch: StoreDispatch) => {
	dispatch(fetchUsers(await getAllUsers()));
};

export const showUsers = (state: RootState) => state.users.data;
