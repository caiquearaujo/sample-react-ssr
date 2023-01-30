import { useStaticContext } from '@server/contexts/StaticContext';
import 'react';

export default function NotFoundPage() {
	const context = useStaticContext();
	context.notFound = true;

	return (
		<section className="center-align" style={{ marginTop: 200 }}>
			<h3>404</h3>
			<p>The page you are looking for does not exist</p>
		</section>
	);
}
