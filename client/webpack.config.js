const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// mode: production ? 'production' : 'development',
	entry: { myAppName: path.resolve(__dirname, './src/index.js') },
	output: {
		path: path.resolve(__dirname, './dist'),
		// filename: production ? '[name].[contenthash:8].js' : '[name].js',
		filename: 'index.[contenthash:8].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: ['html-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(scss|css)$/,
				exclude: '/node_modules/',
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('icons', '[name].[contenthash][ext]'),
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			// filename: production ? '[name].[contenthash].css' : '[name].css',
			filename: 'main.[contenthash:8].css',
		}),
	],
	// devtool: 'source-map',
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9000,
	},
};
