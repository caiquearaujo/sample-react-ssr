import { RootState, UserObject } from '@global/types';
import 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface HeaderProps {
	currentUser?: UserObject;
}

const mapStateToProps = (state: RootState) => ({
	currentUser: state.auth.data,
});

const Header = (props: HeaderProps) => {
	const { currentUser } = props;

	const authLinks = currentUser ? (
		<a href="/api/logout">Logout</a>
	) : (
		<a href="/api/auth/google">Login</a>
	);

	return (
		<header>
			<Link to="/">Home</Link>
			<div>
				<Link to="/users">Users</Link>
				<Link to="/admins">Admins</Link>
				{authLinks}
			</div>
		</header>
	);
};

export default connect(mapStateToProps, undefined)(Header);
