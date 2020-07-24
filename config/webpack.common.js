const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const globals = require('../src/assets/globals');

module.exports = {
	entry: './src/index.js',
	devtool: 'none',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			scriptLoading: 'defer',
			template: path.join(__dirname, '..', 'src', 'assets', 'template.html'),
			inject: 'true',
			title: globals.app.title,
			meta: {
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				'theme-color': globals.app.themeColor,
			},
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: 'chunk.[id].css',
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		compress: true,
		port: 9000,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/components/'),
			contexts: path.resolve(__dirname, '../src/contexts/'),
			assets: path.resolve(__dirname, '../src/assets/'),
			utilities: path.resolve(__dirname, '../src/utilities/'),
			hooks: path.resolve(__dirname, '../src/hooks/'),
		},
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
				exclude: [/node_modules/, /\.module\.css$/],
				use: ['style-loader', 'css-loader'],
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
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
};
