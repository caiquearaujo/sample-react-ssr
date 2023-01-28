import fastifyHelmet from '@fastify/helmet';
import { NODE_ENV } from '@server/env/config';
import { IFastifyInstance, TFnApplyToFastify } from '@server/types';

const callable: TFnApplyToFastify = async (app: IFastifyInstance) => {
	const config =
		NODE_ENV !== 'production'
			? {
					contentSecurityPolicy: false,
					crossOriginOpenerPolicy: false,
					originAgentCluster: false,
			  }
			: {};

	await app.register(fastifyHelmet, config);
};

export default callable;
