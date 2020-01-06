/**
 * @author tanxin
 * @date $
 * @Description: webpack 打包的配置文件-基础包
 */
// webpack 使用的nodejs打包所有此处使用commonjs 的包规则
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入自定义插件
const MyPlugin = require('../myPlugins/MyPlugin.js');
const MyPlugin2 = require('../myPlugins/MyPlugin2.js');

module.exports = {
  mode: 'development',
  // 入口函数地址
  entry: './src/main.ts',
  // 输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MyPlugin({
      name: 'MyPlugin'
    }),
    new MyPlugin2({
      name: 'MyPlugin2'
    }),
  ],
  module: {
    // 基本的loader配置 ---解析 图片 scss ts 文件等
    rules: [
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      // ts
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};




