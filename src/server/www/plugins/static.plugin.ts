import path from 'path';
import fastifyStatic from '@fastify/static';
import { IFastifyInstance, TFnApplyToFastify } from '@server/types';

const callable: TFnApplyToFastify = async (app: IFastifyInstance) => {
	await app.register(fastifyStatic, {
		root: path.join(__dirname, '..', 'public'),
		prefix: '/assets',
	});
};

export default callable;
