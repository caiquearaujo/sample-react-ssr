import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers, showUsers } from '@global/store/users';
import { PreloadFn } from '@global/types';

const preloadUsersListPage: PreloadFn = store =>
	store.dispatch(getUsers());

export { preloadUsersListPage };

export default function UsersListPage() {
	const users = useSelector(showUsers);

	return (
		<React.Fragment>
			<h2>All users available</h2>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</React.Fragment>
	);
}
