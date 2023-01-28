import fastify, { FastifyInstance } from 'fastify';
import path from 'path';

import { IApiServer, IHttpServer } from '@server/types/classes';
import { IApplyToFastify } from '@server/types/interfaces';
import { TAvailableEnvs, TEnvVariables } from '@server/types/types';
import { NODE_ENV, HOST, NAME, PORT } from '@server/env/config';
import Logger from '@server/utils/Logger';

import HttpServer from './HttpServer';

export default class ApiServer implements IApiServer {
	app: FastifyInstance;

	routes: IApplyToFastify;

	plugins: IApplyToFastify;

	env: TEnvVariables;

	constructor(options: {
		routes: IApplyToFastify;
		plugins: IApplyToFastify;
	}) {
		this.env = {
			name: NAME ?? 'api-server',
			port: parseInt(PORT ?? '80', 10),
			host: HOST ?? '0.0.0.0',
			environment: NODE_ENV as TAvailableEnvs,
		};

		this.app = fastify({
			logger: {
				file: path.resolve(__dirname, 'logs', 'server.log'),
			},
			trustProxy: true,
		});

		this.routes = options.routes;
		this.plugins = options.plugins;
	}

	public async bootstrap(): Promise<IHttpServer> {
		await this.init();
		return new HttpServer(this);
	}

	protected async init(): Promise<void> {
		// Prepare application logger
		Logger.prepareInstance(this.app.log);

		// Plugins
		await this.plugins.apply(this.app, this.env);

		// Routes
		await this.routes.apply(this.app, this.env);
	}
}
