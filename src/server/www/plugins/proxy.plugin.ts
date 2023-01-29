import fastifyProxy from '@fastify/http-proxy';
import { IFastifyInstance, TFnApplyToFastify } from '@server/types';

const callable: TFnApplyToFastify = async (app: IFastifyInstance) => {
	await app.register(fastifyProxy, {
		upstream: 'http://react-ssr-api.herokuapp.com',
		prefix: '/api',
		replyOptions: {
			rewriteRequestHeaders: (req, headers) => {
				headers['x-forwarded-host'] = 'localhost:3000';
				return headers;
			},
		},
	});
};

export default callable;
