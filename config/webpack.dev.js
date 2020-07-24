const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globals = require('../src/assets/globals');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '',
	},
	
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
					},
				},
			},
			// {
			// 	test: /\.(jpe?g|png|svg|gif)$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				limit: false,
			// 			},
			// 		},
			// 	],
			// },
		],
	},
});
