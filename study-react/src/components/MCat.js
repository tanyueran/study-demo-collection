import React from 'react'

export default class MCat extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <p>获取输入框的值：{this.props.txt || '~~没有输入吧'}</p>
  }
}


