import { NODE_ENV } from '@server/env/config';

import helmetPlugin from './helmet.plugin';
import corsPlugin from './cors.plugin';
import compressPlugin from './compress.plugin';
import staticPlugin from './static.plugin';

const plugins = [corsPlugin, compressPlugin, staticPlugin];

if (NODE_ENV === 'production') {
	plugins.push(helmetPlugin);
}

export default plugins;
