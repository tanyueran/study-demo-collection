import React from 'react'
import {connect} from 'react-redux';
import {createStore} from 'redux'

import {setUserInfo} from "../../store/user/action";


// 测试单独使用redux
const reducer = function (state = 0, action) {
  switch (action.type) {
    case '+':
      return state + 1;
    case '-':
      return state - 1;
    case 'rest':
      return 0;
    default:
      return 0;
  }
};

const countAction = (type) => {
  return {type}
};

const store = createStore(reducer);


/*
* home 页面
* */
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    a: 3,
    num: 0,
  };

  componentWillMount() {
    console.log('组件将要被挂载了');
    // 订阅
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  componentDidMount() {
    console.log('组件被挂载了')
  }

  componentWillUnmount() {
    console.log('组件将被卸载')
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('组件将要被更新了')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('组件更新完成')
  }

  clickHandler = () => {
    this.setState((state) => {
      return {
        num: ++state.num,
      }
    })
  };

  updateUserInfoHandler = () => {
    this.props.dispatch(setUserInfo({
      username: '张三',
      password: 'password'
    }));
  };


  static mapStateToProps(state) {
    if (state.user !== undefined) {
      return state.user;
    }
    return {};
  }


  render() {
    return (
      <div>
        <h1>{this.props.username || '-'}-home</h1>
        <hr/>
        a:{this.state.a}
        {this.state.num}
        <p>
          <button onClick={this.clickHandler}>计数</button>
        </p>
        <p>
          <button onClick={this.updateUserInfoHandler}>修改登录</button>
        </p>
        <p>
          <button onClick={() => {
            store.dispatch(countAction('+'));
          }}>测试rudex +
          </button>
          <button onClick={() => {
            store.dispatch(countAction('-'));
          }}>测试rudex -
          </button>
          <button onClick={() => {
            store.dispatch(countAction('rest'));
          }}>测试rudex rest
          </button>
        </p>
      </div>
    );
  }
}

export default connect(Home.mapStateToProps)(Home);
