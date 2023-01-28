const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	entry: './src/client/index.tsx',
	target: 'web',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'js'),
	},
};

module.exports = merge(baseConfig, config);
