import 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
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

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>React SSR</title>
			</head>
			<body>
				<div id="root">${content}</div>
				<script src="/assets/js/bundle.js" crossorigin="anonymous"></script>
			</body>
		</html>
	`;
};
