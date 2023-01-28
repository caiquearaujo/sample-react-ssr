const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: dev ? 'development' : 'production',
	resolve: {
		extensions: ['.ts', '.tsx'],
		modules: ['src', 'node_modules'],
		alias: {
			'@root': path.resolve(__dirname),
			'@client': path.resolve(__dirname, 'src/client'),
			'@server': path.resolve(__dirname, 'src/server'),
		},
	},
	rules: [
		{
			test: /\.ts(x?)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
				},
				{
					loader: 'ts-loader',
					options: {
						configFile: path.resolve(
							__dirname,
							dev ? 'tsconfig.json' : 'tsconfig.build.json'
						),
					},
				},
			],
		},
		{
			test: /\.scss$/,
			use: [
				{
					loader: 'postcss-loader',
				},
				'sass-loader',
			],
		},
	],
};
