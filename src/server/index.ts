import { FastifyInstance } from 'fastify';
import plugins from '@server/www/plugins';
import FastifyApplierGroup from '@server/www/FastifyApplierGroup';
import ApiServer from './www/ApiServer';

const routes = [
	async (app: FastifyInstance) => {
		app.get('/', (request, reply) => {
			reply.type('text/html').send('<h1>Hello World!</h1>');
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
