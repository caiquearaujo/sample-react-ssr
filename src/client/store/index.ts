import { configureStore } from '@reduxjs/toolkit';
import reducers from '@global/store/reducers';
import AxiosFactory from '@global/api/AxiosFactory';

const axios = AxiosFactory.create({
	baseURL: '/api',
});

const store = configureStore({
	reducer: reducers,
	preloadedState: window.__PRELOADED_STATE__ || {},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ thunk: { extraArgument: axios } }),
});

export default store;
