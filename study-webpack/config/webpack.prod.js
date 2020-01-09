/**
 * @author tanxin
 * @date $
 * @Description: webpack 打包的配置文件--生产环境的
 */
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
});




