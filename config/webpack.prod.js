const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globals = require('../src/assets/globals');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'eval',
	output: {
		filename: 'main.[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include: /\.input\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include: /\.module\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/, /\.module\.css$/],
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(jpg?g|png|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					},
				},
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
});
