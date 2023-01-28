const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	entry: './src/server/index.ts',
	target: 'node',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
