import 'react';
import { PreloadedRouteObject } from '@global/types';
import Home from './pages/Home';
import UserList, {
	preload as preloadUserList,
} from './components/UserList';

const routes: PreloadedRouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/users',
		element: <UserList />,
		preload: preloadUserList,
	},
];

export default routes;
