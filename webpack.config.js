const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: [
	'./src/index.js'
  ],
  module: {
    rules: [
		{
			test: /\.vue$/,
			use: 'vue-loader'
		},
		{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				{
					loader: 'css-loader',
					options: {
						// enable CSS Modules
						modules: true
					}
				}
			]
		}
    ]
  },
  plugins: [
	  new VueLoaderPlugin()
  ]
}
