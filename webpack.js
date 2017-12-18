const path = require('path');

module.exports = {
	// Entry point for webpack
	entry: './src/app/app.js',
	// Output directory and filename
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'app/scripts')
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
			}
		]
	}
};