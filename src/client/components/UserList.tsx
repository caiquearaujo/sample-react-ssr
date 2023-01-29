import { getUsers, showUsers } from '@global/store/users';
import { StoreDispatch } from '@global/types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function UserList() {
	const users = useSelector(showUsers);
	const dispatch = useDispatch<StoreDispatch>();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<div>
			<h2>All users available</h2>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
