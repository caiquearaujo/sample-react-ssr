import 'react';
import { connect } from 'react-redux';
import { AuthState, RootState } from '@global/types';
import { APIStatus } from '@global/api/types';
import { Navigate } from 'react-router-dom';
import { useStaticContext } from '@server/contexts/StaticContext';

export default (ChildComponent: any) => {
	function RequiredAuth(props: { auth: AuthState }) {
		const context = useStaticContext();
		const { auth } = props;

		if (
			(auth.status === APIStatus.REJECTED ||
				auth.status === APIStatus.FULFILLED) &&
			!auth.data
		) {
			context.redirectTo = '/';
			return <Navigate to="/" replace={true} />;
		}

		if (
			auth.status === APIStatus.PENDING ||
			auth.status === APIStatus.IDLE
		) {
			return <div>Loading...</div>;
		}

		return <ChildComponent {...props} />;
	}

	const mapStateToProps = (state: RootState) => ({
		auth: state.auth,
	});

	return connect(mapStateToProps, undefined)(RequiredAuth);
};
