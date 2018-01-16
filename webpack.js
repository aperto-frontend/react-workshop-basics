const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const magicImporter = require('node-sass-magic-importer');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	devtool: 'cheap-module-source-map',
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
						'stage-1',
						[ 'env', {
							targets: {
								browsers: [ 'last 2 Chrome versions' ]
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
					use: [
						{
							loader: 'css-loader'
						}, {
							loader: 'sass-loader',
							options: {
								importer: magicImporter(),
							}
						}
					],
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/app.bundle.css'
		}),
		// Copy asset files from src/app
		new CopyWebpackPlugin([ {
			from: `src/app/assets`,
			ignore: [ '.gitkeep' ]
		} ])
	]
};