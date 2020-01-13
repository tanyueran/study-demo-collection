import React from 'react'

/*
* home 页面
* */
export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    num: 0,
  }

  componentWillMount() {
    console.log('组件将要被挂载了')
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
  }

  render() {
    return (
      <div>
        <h1>home</h1>
        <hr/>
        {this.state.num}
        <p>
          <button onClick={this.clickHandler}>计数</button>
        </p>
      </div>
    );
  }
}
