import { matchRoutes } from 'react-router-dom';
import routes from '@client/Routes';
import plugins from '@server/www/plugins';
import FastifyApplierGroup from '@server/www/FastifyApplierGroup';
import ApiServer from './www/ApiServer';
import render from './render';
import { IFastifyInstance } from './types';
import createStore from './store';

const apiRoutes = [
	async (app: IFastifyInstance) => {
		app.get('*', async (request, reply) => {
			const store = createStore(request);
			const promises = matchRoutes(routes, request.url)?.map(
				({ route }) => {
					if (route.preload) {
						return route.preload(store);
					}

					return null;
				}
			);

			if (promises) {
				await Promise.all(promises);
			}

			reply.type('text/html').send(render(request.url, store));
		});
	},
];

const options = {
	routes: new FastifyApplierGroup(...apiRoutes),
	plugins: new FastifyApplierGroup(...plugins),
};

new ApiServer(options)
	.bootstrap()
	.then(server => {
		server
			.start()
			.then(() => console.log(`⚡️ Server is ready and running.`))
			.catch(err => {
				console.error('❌ Server has failed while starting');
				console.error(err);
				process.exit(1);
			});
	})
	.catch(err => {
		console.error('❌ Server has failed while starting');
		console.error(err);
		process.exit(1);
	});
