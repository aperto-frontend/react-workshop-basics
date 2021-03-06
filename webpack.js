const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	// Entry point for webpack
	entry: './src/app/app.js',
	// Output directory and filename
	output: {
		filename: 'scripts/app.bundle.js',
		path: path.resolve(__dirname, 'app')
	},
	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: { // Let's add babel presets and plugins
					presets: [
						'react',
						'stage-0',
						[ 'env', {
							targets: {
								browsers: [ 'last 2 version' ]
							}
						} ]
					],
					plugins: [
						'transform-class-properties',
						'transform-decorators-legacy'
					]
				}
			},
			{
				test: /\.(s*)css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 'css-loader', 'sass-loader' ],
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/app.bundle.css'
		})
	]
};