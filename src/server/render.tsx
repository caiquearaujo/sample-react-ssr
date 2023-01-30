import 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript';
import App from '@client/App';
import { Provider } from 'react-redux';
import { Store } from '@global/types';
import { StaticProvider } from './contexts/StaticContext';

export default (
	url: string,
	store: Store,
	context: Record<string, any>
) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={url}>
				<StaticProvider value={context}>
					<App />
				</StaticProvider>
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
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
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
