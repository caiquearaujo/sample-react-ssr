import fastifyCompress from '@fastify/compress';
import { IFastifyInstance, TFnApplyToFastify } from '@server/types';

const callable: TFnApplyToFastify = async (app: IFastifyInstance) => {
	await app.register(fastifyCompress, { global: true });
};

export default callable;
