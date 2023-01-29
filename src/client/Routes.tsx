import 'react';
import { PreloadedRouteObject } from '@global/types';
import HomePage from './pages/HomePage';
import UsersListPage, {
	preloadUsersListPage,
} from './pages/UsersListPage';

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
];

export default routes;
