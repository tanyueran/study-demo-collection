/**
 * @author tanxin
 * @date $
 * @Description: 入口函数
 */
import React from 'react';
import {render} from 'react-dom';
import './css/index.css'

// 输入框
class MInput extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
  }

  render() {
    return <p>
      <label>
        {/*使用传入的props*/}
        {this.props.label}
        <input
          placeholder={this.props.placeholder}
          type={this.props.type || 'text'}/>
      </label>
    </p>
  }

}

// 输入框组件
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '123',
      time: new Date().toString(),
      styleClass: {
        border: '1px solid #efefef',
        borderRadius: '5px',
        margin: '0 auto',
        width: '500px',
        align: 'center',
        padding: '50px 10px',
      },
      timer: null,
    }
  }

  componentWillMount() {
    console.log('生命周期函数：组件将要挂载');
  }

  componentWillUnmount() {
    if (this.state.timer !== null) {
      clearInterval(this.state.timer);
      this.state.timer = null;
    }
  }

  componentDidMount() {
    console.log('生命周期函数：组件已经挂载了');
    this.state.timer = setInterval(() => {
      this.setState((state, props) => {
        return {
          time: new Date().toString()
        }
      });
    }, 1000);
  }

  render() {
    // 组件有状态改变的话，render函数每次都会被执行
    console.log('render');
    return (<div style={this.state.styleClass}>
      <h1>react component</h1>
      <p>现在的时间：{this.state.time}</p>
      <form onSubmit={this.submitHandler.bind(this)}>
        <MInput label="用户名：" type="text" placeholder="请输入用户名"/>
        <MInput label="密码：" type="password" placeholder="请输入密码"/>
        <button type="submit">提交</button>
      </form>
    </div>);
  }

  submitHandler(e) {
    console.log(this);
    e.preventDefault();
  }

}


render(
  <Container txt={1}/>,
  document.getElementById('app')
);


