const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename:'js/bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}) 
	],
	//loaders
	module: {
		rules: [
			{
				//a regular expression telling all javascript files to use the babel loader
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};