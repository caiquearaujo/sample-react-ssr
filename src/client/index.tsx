import 'babel-polyfill';
import 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const container = document.getElementById('root') as HTMLElement;
ReactDOM.hydrateRoot(
	container,
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
