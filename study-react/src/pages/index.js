import React from 'react'
import {Route} from 'react-router-dom';
import MNav from '../components/MNav.js'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <MNav/>
      <hr/>
      {/*定义第二层路由*/}
      {this.props.routes.map((route, i) => {
        return <Route path={route.path} key={i} component={route.component}/>
      })}
    </div>
  }
}

