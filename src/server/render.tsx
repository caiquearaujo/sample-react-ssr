import 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript';
import App from '@client/App';
import { Provider } from 'react-redux';
import { Store } from '@global/types';

export default (url: string, store: Store) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</Provider>
	);

	const state = serialize(store.getState(), { isJSON: true });

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
				<title>React SSR</title>
			</head>
			<body>
				<div id="root">${content}</div>
				<script>window.__PRELOADED_STATE__=${state};</script>
				<script src="/assets/js/bundle.js" crossorigin="anonymous"></script>
			</body>
		</html>
	`;
};
