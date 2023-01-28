import plugins from '@server/www/plugins';
import FastifyApplierGroup from '@server/www/FastifyApplierGroup';
import ApiServer from './www/ApiServer';
import render from './render';
import { IFastifyInstance } from './types';

const routes = [
	async (app: IFastifyInstance) => {
		app.get('*', (request, reply) => {
			reply.type('text/html').send(render(request.url));
		});
	},
];

const options = {
	routes: new FastifyApplierGroup(...routes),
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
