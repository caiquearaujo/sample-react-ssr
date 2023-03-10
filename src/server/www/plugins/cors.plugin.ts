import fastifyCors from '@fastify/cors';
import { IFastifyInstance, TFnApplyToFastify } from '@server/types';

const callable: TFnApplyToFastify = async (app: IFastifyInstance) => {
	await app.register(fastifyCors, {
		origin: true,
	});
};

export default callable;
