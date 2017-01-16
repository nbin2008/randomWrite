var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: __dirname + "/src/app.js",
	output: {
		path: __dirname + "/build",
		filename: "main.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			}
		]
	}
}
