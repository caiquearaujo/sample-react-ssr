import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, showUsers } from '@global/store/users';
import { PreloadFn, StoreDispatch } from '@global/types';

const preload: PreloadFn = store => store.dispatch(getUsers());

export { preload };

export default function UserList() {
	const users = useSelector(showUsers);
	const dispatch = useDispatch<StoreDispatch>();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

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
