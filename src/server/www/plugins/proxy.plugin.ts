import fastifyProxy from '@fastify/http-proxy';
import { IFastifyInstance, TFnApplyToFastify } from '@server/types';

const callable: TFnApplyToFastify = async (app: IFastifyInstance) => {
	await app.register(fastifyProxy, {
		upstream: 'https://react-ssr-api.herokuapp.com/',
		prefix: '/api',
	});
};

export default callable;
