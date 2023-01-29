import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, UserObject, AuthState } from '@global/types';
import getPayloadException from '@global/api';
import { APIError, APIStatus } from '@global/api/types';
import { AxiosInstance } from 'axios';

const initialState: AuthState = {
	data: undefined,
	status: APIStatus.IDLE,
};

export const getCurrentUser = createAsyncThunk<
	UserObject,
	void,
	{ rejectValue: APIError; extra: AxiosInstance }
>('auth/currentUser', async (_, { rejectWithValue, extra }) => {
	try {
		const { data } = await extra.get<UserObject>('/current_user');
		return data;
	} catch (error) {
		return rejectWithValue(getPayloadException(error));
	}
});

// Reducer
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getCurrentUser.pending, state => {
			state.status = APIStatus.PENDING;
		});
		builder.addCase(getCurrentUser.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = APIStatus.FULFILLED;
		});
		builder.addCase(getCurrentUser.rejected, state => {
			state.status = APIStatus.REJECTED;
		});
	},
});

export default authSlice.reducer;

export const showUsers = (state: RootState) => state.auth;
