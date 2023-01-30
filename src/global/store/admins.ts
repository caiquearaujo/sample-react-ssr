import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, AdminObject, AdminsState } from '@global/types';
import getPayloadException from '@global/api';
import { APIError, APIStatus } from '@global/api/types';
import { AxiosInstance } from 'axios';

const initialState: AdminsState = {
	data: [],
	status: APIStatus.IDLE,
};

export const getAdmins = createAsyncThunk<
	AdminObject[],
	void,
	{ rejectValue: APIError; extra: AxiosInstance }
>('admins/getAdmins', async (_, { rejectWithValue, extra }) => {
	try {
		const { data } = await extra.get<AdminObject[]>('/admins');
		return data;
	} catch (error) {
		return rejectWithValue(getPayloadException(error));
	}
});

// Reducer
const adminsSlice = createSlice({
	name: 'admins',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAdmins.pending, state => {
			state.status = APIStatus.PENDING;
		});
		builder.addCase(getAdmins.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = APIStatus.FULFILLED;
		});
		builder.addCase(getAdmins.rejected, (state, action) => {
			state.status = APIStatus.REJECTED;
			state.error = action.payload;
		});
	},
});

export default adminsSlice.reducer;

export const showAdmins = (state: RootState) => state.admins;
