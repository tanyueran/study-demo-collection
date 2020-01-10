/** * @author tanxin * @date $ * @Description: webpack 打包的配置文件-基础包 */// webpack 使用的nodejs打包所有此处使用commonjs 的包规则const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');// 清理 distconst CleanWebpackPlugin = require('clean-webpack-plugin');module.exports = {  mode: 'development',  // 入口函数地址  entry: './src/main.js',  // 输出  output: {    filename: 'bundle.js',    path: path.resolve(__dirname, '../dist'),  },  plugins: [    // 引入html的配置    new HtmlWebpackPlugin({      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},      title: "test app",      filename: 'index.html',      template: "src/index.html"    }),    new CleanWebpackPlugin.CleanWebpackPlugin(),  ],  module: {    // 基本的loader配置 ---解析 图片 scss ts 文件等    rules: [      // 图片      {        test: /\.(png|svg|jpg|gif)$/,        use: [          'file-loader'        ]      },      // scss      {        test: /\.scss$/,        use: [          'style-loader',          'css-loader',          'sass-loader',        ]      },      {        test: /\.js$/,        exclude: /node_modules/,        use: [{          loader: "babel-loader",          options: {"presets": ["@babel/react", "@babel/env",]}        }],      }    ]  }};