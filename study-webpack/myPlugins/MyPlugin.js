/**
 * @author tanxin
 * @date $
 * @Description: Webpack 通过 Plugin 机制让其更加灵活，以适应各种应用场景。
 * -------------：在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过
 */
class MyPlugin {
  constructor(props) {
    console.log("我的插件被创建：");
    console.log("传入参数" + JSON.stringify(props));
  }

  apply(compiler) {
    console.log('==========================================');
    console.log('我的插件MyPlugin的apply被调用');
    console.log('==========================================');
    /**
     * 监听到 Webpack 广播出来的事件。
     * --查询文档查看相关的事件
     * --这些事件都是webpack运行的时候触发执行的
     */
    compiler.hooks.done.tap('afterPlugins', (params) => {
      console.log('》》》》》afterPlugins=============')
    });
    compiler.hooks.done.tap('run', (params) => {
      console.log('》》》》》run=============')
    });
    compiler.hooks.done.tap('beforeRun', (params) => {
      console.log('》》》》》beforeRun=============')
    });

  }
}

module.exports = MyPlugin;
