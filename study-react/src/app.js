// 引入react-router
import React, {Suspense} from 'react'
import {BrowserRouter as Router, HashRouter, Switch, Route, Link} from 'react-router-dom';

// 路由定义信息
import routes from './router/index.js'

export default class App extends React.Component {
  render() {
    return <HashRouter>
      <div>
        <Suspense fallback={'loading...'}>
          <Switch>
            {/*定义第一层的路由，对应到pages/index.js出定义第二层路由*/}
            {routes.map((route, i) =>
              <Route
                key={i}
                path={route.path}
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes}/>
                )}
              />)}
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  }
}
