var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: __dirname + "/static/app.js",
	output: {
		path: __dirname + "/build",
		filename: "main.js",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: "vue",
			}
		],
	},
	babel: {
		presets: ['latest'],
	},
	resolve: {
        extensions: ['', '.js', '.css', '.scss','.vue'],
        alias: {
            'vue$': __dirname + '/node_modules/vue/dist/vue.js'
        }
    },
}

