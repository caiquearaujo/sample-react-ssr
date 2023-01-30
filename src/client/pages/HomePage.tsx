import 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
	const head = () => (
		<Helmet>
			<title>Homepage</title>
			<meta property="og:title" content="Users List" />
		</Helmet>
	);

	return (
		<section className="center-align" style={{ marginTop: 200 }}>
			{head()}
			<h3>Welcome</h3>
			<p>Check out these awesome features</p>
		</section>
	);
}
