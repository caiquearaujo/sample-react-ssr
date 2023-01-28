import 'react';
import { renderToString } from 'react-dom/server';
import App from '@client/App';

export default () => {
	const content = renderToString(<App />);

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
