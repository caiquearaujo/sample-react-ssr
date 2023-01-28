import { FastifyInstance } from 'fastify';

export type TAvailableEnvs = 'test' | 'development' | 'production';

export type TEnvVariables = {
	name: string;
	port: number;
	host: string;
	environment: TAvailableEnvs;
};

export type TFnApplyToFastify = (
	app: FastifyInstance,
	env: TEnvVariables
) => Promise<void>;
