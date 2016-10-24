var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

// -----路径常量-------

var ROOT_PAtH = path.resolve(__dirname);
var APP_PATH  = path.resolve(ROOT_PAtH,'app');
var BUILD_PATH = path.resolve(ROOT_PAtH,'build');

module.exports = {
	entry: APP_PATH,
	output:{
		path: BUILD_PATH,
		filename: "[name].[hash].js"
	},
	devtool: 'eval-source-map',
  module:{
  	loaders:[
  	  {
  	  	test:/\.css$/,
  	  	loaders:['style','css'],
  	  	include: APP_PATH
  	  },
  	  {
  	  	test:/\.(png|jpg)$/,
  	  	loader:'url?limit=40000'
  	  },
  	  {
  	  	test:/\.js/,
  	  	loader:'babel',
  	  	query:{
         presets:'es2015'
  	  	}
  	  	
  	  }
  	]
  },
	plugins:[
	  new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new HtmlWebpackPlugin({         //自动生成页面
			title:'Have A Good Day'
		}),
		new webpack.ProvidePlugin({
			$     : 'jquery',
			jQuery:'jquery'
		})
	],
	resove:{
		extentions:['.js','.json','.html','.css']
	}
}





