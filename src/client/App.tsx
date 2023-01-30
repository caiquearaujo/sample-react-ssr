import { getCurrentUser } from '@global/store/auth';
import { PreloadFn } from '@global/types';
import 'react';
import { Helmet } from 'react-helmet';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import routes from './Routes';

const preloadApp: PreloadFn = store => store.dispatch(getCurrentUser());

export { preloadApp };

export default function App() {
	const head = () => (
		<Helmet>
			<meta charSet="utf-8" />
			<link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
			/>
		</Helmet>
	);

	return (
		<div>
			{head()}
			<Header />
			<main>{useRoutes(routes)}</main>
		</div>
	);
}
