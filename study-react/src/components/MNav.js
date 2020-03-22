import React from 'react'

import {Link, withRouter} from 'react-router-dom';

import constant from '../constant/index.js';

const ThemeContext = constant.context;

class MNav extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    style: {
      display: 'flex',
    }
  };

  render() {
    return <nav>
      <ThemeContext.Consumer>
        {value => {
          return <ul style={this.state.style}>
            <li>
              <button onClick={this.props.toggle}>当前主题：{value.theme}，切换主题</button>
            </li>
            <li>
              <Link to={this.props.match.url + '/home'}>Home</Link>
            </li>
            <li>
              <Link to={this.props.match.url + '/about'}>About</Link>
            </li>
            <li>
              <Link to={this.props.match.url + '/user'}>User</Link>
            </li>
          </ul>
        }
        }
      </ThemeContext.Consumer>
    </nav>
  }
}

// withRouter 将路由信息继续传递下去
export default withRouter(MNav);
