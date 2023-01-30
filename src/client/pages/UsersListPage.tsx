import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getUsers, showUsers } from '@global/store/users';
import { PreloadFn, StoreDispatch } from '@global/types';
import { APIStatus } from '@global/api/types';

const preloadUsersListPage: PreloadFn = store =>
	store.dispatch(getUsers());

export { preloadUsersListPage };

export default function UsersListPage() {
	const users = useSelector(showUsers);
	const dispatch = useDispatch<StoreDispatch>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	useEffect(() => {
		if (users.status === APIStatus.PENDING) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [users.status]);

	const head = () => (
		<Helmet>
			<title>{`${users.data?.length ?? 0} users loaded`}</title>
			<meta property="og:title" content="Users List" />
		</Helmet>
	);

	const renderUsers = () => {
		if (isLoading) {
			return <div>Loading...</div>;
		}

		return (
			<ul>
				{users.data?.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		);
	};

	return (
		<React.Fragment>
			{head()}
			<h2>All users available</h2>
			{renderUsers()}
		</React.Fragment>
	);
}
