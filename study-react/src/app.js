// 引入react-router
import React, {Suspense} from 'react'
/*
* 使用BrowserRouter 开发时需要webpack做特殊的设置，生产的时候需要服务器配置一下。
* */
import {BrowserRouter as Router, HashRouter, Switch, Route, Link} from 'react-router-dom';

import MLoading from './components/MLoading.js'

// 路由定义信息
import routes from './router/index.js'

export default class App extends React.Component {
  render() {
    return <HashRouter>
      <div>
        {/*Suspense，配合React.lazy使用，正在加载是，渲染fallback中的组件*/}
        <Suspense fallback={<MLoading/>}>
          <Switch>
            {/*定义第一层的路由，对应到pages/index.js出定义第二层路由*/}
            {routes.map((route, i) =>
              // 定于路由
              <Route
                key={i}
                path={route.path}
                render={props => (
                  // 通过props.render渲染，并将子路由传递下去
                  <route.component {...props} routes={route.routes}/>
                )}
              />)}
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  }
}
