import 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
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
	const helmet = Helmet.renderStatic();

	return `
		<!DOCTYPE html>
		<html lang="en" ${helmet.htmlAttributes.toString()}>
			<head>
				${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
			</head>
			<body ${helmet.bodyAttributes.toString()}>
				<div id="root">${content}</div>
				<script>window.__PRELOADED_STATE__=${state};</script>
				<script src="/assets/js/bundle.js" crossorigin="anonymous"></script>
			</body>
		</html>
	`;
};
