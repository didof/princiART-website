const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globals = require('./src/assets/globals');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			contexts: path.resolve(__dirname, 'src/contexts/'),
			assets: path.resolve(__dirname, 'src/assets/'),
			utilites: path.resolve(__dirname, 'src/utilities/'),
			hooks: path.resolve(__dirname, 'src/hooks/')
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include: /\.input\.css$/,
				use: ['MiniCssExtractPlugin.loader', 'css-loader'],
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
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			scriptLoading: 'defer',
			template: path.resolve(__dirname, './src/assets/template.ejs'),
			inject: 'true',
			title: globals.app.title,
			meta: {
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				'theme-color': globals.app.themeColor,
			},
		}),
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
			chunkFilename: '[id].css',
		}),
	],
};
