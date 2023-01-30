import 'react';
import { PreloadedRouteObject } from '@global/types';
import HomePage from './pages/HomePage';
import UsersListPage, {
	preloadUsersListPage,
} from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

const routes: PreloadedRouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/users',
		element: <UsersListPage />,
		preload: preloadUsersListPage,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];

export default routes;
