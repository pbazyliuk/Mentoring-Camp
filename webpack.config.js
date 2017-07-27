const path = require('path');

module.exports = {
	context: __dirname,
	entry: './index.js',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, './public/build'),
		filename: 'bundle.js'
	},
	devServer: {
		publicPath: '/public/build',
		historyApiFallback: true
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						query: {
							modules: true,
							camelCase: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};
