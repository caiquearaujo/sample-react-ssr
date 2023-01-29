import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, UserObject, UsersState } from '@global/types';
import getPayloadException from '@global/api';
import { APIError, APIStatus } from '@global/api/types';
import { AxiosInstance } from 'axios';

const initialState: UsersState = {
	data: [],
	status: APIStatus.IDLE,
};

export const getUsers = createAsyncThunk<
	UserObject[],
	void,
	{ rejectValue: APIError; extra: AxiosInstance }
>('users/getUsers', async (_, { rejectWithValue, extra }) => {
	try {
		const { data } = await extra.get<UserObject[]>('/users');
		return data;
	} catch (error) {
		return rejectWithValue(getPayloadException(error));
	}
});

// Reducer
const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getUsers.pending, state => {
			state.status = APIStatus.PENDING;
		});
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = APIStatus.FULFILLED;
		});
		builder.addCase(getUsers.rejected, state => {
			state.status = APIStatus.REJECTED;
		});
	},
});

export default usersSlice.reducer;

export const showUsers = (state: RootState) => state.users;
