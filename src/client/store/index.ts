import { configureStore } from '@reduxjs/toolkit';
import reducers from '@global/store/reducers';

const store = configureStore({
	reducer: reducers,
});

export default store;
