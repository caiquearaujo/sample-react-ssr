import 'babel-polyfill';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '@global/store/reducers';

export default () => {
	const store = configureStore({
		reducer: reducers,
	});

	return store;
};
