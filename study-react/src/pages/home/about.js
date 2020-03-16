import React from 'react'
import Comp from './gaojiehanshu/Comp.js'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>about</h1>
        <hr/>
        <h2>模拟状态组件服用-高阶函数</h2>
        <Comp/>
      </div>
    );
  }
}
