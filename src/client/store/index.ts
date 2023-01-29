import { configureStore } from '@reduxjs/toolkit';
import reducers from '@global/store/reducers';

const store = configureStore({
	reducer: reducers,
	preloadedState: window.__PRELOADED_STATE__ || {},
});

export default store;
