import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmins, showAdmins } from '@global/store/admins';
import { PreloadFn, StoreDispatch } from '@global/types';
import { APIStatus } from '@global/api/types';
import requireAuth from '@client/components/hocs/RequireAuth';

const preloadAdminsListPage: PreloadFn = store =>
	store.dispatch(getAdmins());

export { preloadAdminsListPage };

const AdminsListPage = () => {
	const admins = useSelector(showAdmins);
	const dispatch = useDispatch<StoreDispatch>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(getAdmins());
	}, []);

	useEffect(() => {
		if (admins.status === APIStatus.PENDING) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [admins.status]);

	const renderAdmins = () => {
		if (isLoading) {
			return <div>Loading...</div>;
		}

		return (
			<ul>
				{admins.data?.map(admin => (
					<li key={admin.id}>{admin.name}</li>
				))}
			</ul>
		);
	};

	return (
		<React.Fragment>
			<h2>Protected list of admins</h2>
			{renderAdmins()}
		</React.Fragment>
	);
};

export default requireAuth(AdminsListPage);
