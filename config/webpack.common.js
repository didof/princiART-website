const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globals = require('../src/assets/globals');

module.exports = {
	entry: './src/index.js',
	devtool: 'none',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			scriptLoading: 'defer',
			template: path.join(__dirname, '..', 'src', 'assets', 'template.ejs'),
			inject: 'true',
			title: globals.app.title,
			meta: {
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				'theme-color': globals.app.themeColor,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'chunk.[name].css',
			chunkFilename: 'chunk.[id].css',
		}),
	],
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/components/'),
			contexts: path.resolve(__dirname, '../src/contexts/'),
			assets: path.resolve(__dirname, '../src/assets/'),
			utilities: path.resolve(__dirname, '../src/utilities/'),
			hooks: path.resolve(__dirname, '../src/hooks/'),
		},
	},
};
