import React from 'react'
import {connect} from "react-redux";
import {setUserInfo} from "../store/user/action";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: '',
    password: '',
  };

  usernameInputChange = (e) => {
    let username = e.target.value;
    this.setState({
      username,
    });
  };

  passwordInputChange = (e) => {
    let password = e.target.value;
    this.setState({
      password,
    })
  };

  loginHandler = (e) => {
    alert(this.state.username + '-' + this.state.password);
    this.props.dispatch(setUserInfo({
      username: this.state.username,
      password: this.state.password,
    }));
    this.props.history.push('/index')
  };

  render() {
    return <div>
      <p>
        <label>
          账号：
          <input onInput={this.usernameInputChange} type="text"/>
        </label>
      </p>
      <p>
        <label>
          密码：
          <input onInput={this.passwordInputChange} type="password"/>
        </label>
      </p>
      <p className={'text-center'}>
        <button onClick={this.loginHandler} type="button">登录</button>
      </p>
    </div>
  }
}

export default connect()(Login)
