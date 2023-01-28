import { FastifyInstance } from 'fastify';
import fastifyCompress from '@fastify/compress';
import { TFnApplyToFastify } from '@server/types/types';

const callable: TFnApplyToFastify = async (app: FastifyInstance) => {
	await app.register(fastifyCompress, { global: true });
};

export default callable;
