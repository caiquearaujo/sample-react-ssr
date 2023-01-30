import 'react';
import { Helmet } from 'react-helmet';
import { useStaticContext } from '@server/contexts/StaticContext';

export default function NotFoundPage() {
	const context = useStaticContext();
	context.notFound = true;

	const head = () => (
		<Helmet>
			<title>Not found</title>
			<meta property="og:title" content="Users List" />
		</Helmet>
	);

	return (
		<section className="center-align" style={{ marginTop: 200 }}>
			{head()}
			<h3>404</h3>
			<p>The page you are looking for does not exist</p>
		</section>
	);
}
