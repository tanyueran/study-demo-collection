import React from 'react'

import {Link, withRouter} from 'react-router-dom';

class MNav extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    style: {
      display: 'flex',
    }
  }

  render() {
    return <nav>
      <ul style={this.state.style}>
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
    </nav>
  }
}

// withRouter 将路由信息继续传递下去
export default withRouter(MNav);
