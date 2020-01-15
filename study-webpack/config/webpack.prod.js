/**
 * @author tanxin
 * @date $
 * @Description: webpack 打包的配置文件--生产环境的
 */
const merge = require('webpack-merge');
const common = require('./webpack.config');

// 其他的环境配置，通过merge合并
module.exports = merge(common, {
  mode: 'production',
});




