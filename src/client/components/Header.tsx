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
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">
					Home
				</Link>
				<ul className="right">
					<li>
						<Link to="/users">Users</Link>
					</li>
					<li>
						<Link to="/admins">Admins</Link>
					</li>
					<li>{authLinks}</li>
				</ul>
			</div>
		</nav>
	);
};

export default connect(mapStateToProps, undefined)(Header);
