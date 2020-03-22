import React from 'react'
import {Route} from 'react-router-dom';
import MNav from '../components/MNav.js'

// 常量
import constant from '../constant/index.js'

// 创建模式 默认的是light
const ThemeContext = constant.context;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    theme: constant.contextParams.dark,
  };

  toggle = () => {
    this.setState(state => {
      if (state.theme.theme === 'dark') {
        return {
          theme: constant.contextParams.light
        }
      }
      return {
        theme: constant.contextParams.dark,
      }
    })
  };

  render() {
    return <div>
      <ThemeContext.Provider value={this.state.theme}>
        <MNav toggle={this.toggle}/>
        <hr/>
        {/*定义第二层路由*/}
        {this.props.routes.map((route, i) => {
          return <Route path={route.path} key={i} component={route.component}/>
        })}
      </ThemeContext.Provider>
    </div>
  }
}

