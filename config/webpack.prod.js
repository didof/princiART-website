const path = require('path');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globals = require('../src/assets/globals');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'main.[hash].js',
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
						name: '[name].[hash].[ext]',
						outputPath: 'images',
					},
				},
			},
		],
	},
});
