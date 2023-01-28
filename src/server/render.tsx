import 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '@client/App';

export default (url: string) => {
	const content = renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>
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
