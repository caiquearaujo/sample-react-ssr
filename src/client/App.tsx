import { getCurrentUser } from '@global/store/auth';
import { PreloadFn } from '@global/types';
import 'react';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import routes from './Routes';

const preloadApp: PreloadFn = store => store.dispatch(getCurrentUser());

export { preloadApp };

export default function App() {
	return (
		<div>
			<Header />
			<main>{useRoutes(routes)}</main>
		</div>
	);
}
