import 'babel-polyfill';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '@global/store/reducers';
import AxiosFactory from '@global/api/AxiosFactory';
import { FastifyRequest } from 'fastify';

export default (request: FastifyRequest) => {
	const axios = AxiosFactory.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: {
			cookie: request.headers.cookie || '',
		},
	});

	const store = configureStore({
		reducer: reducers,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({ thunk: { extraArgument: axios } }),
	});

	return store;
};
