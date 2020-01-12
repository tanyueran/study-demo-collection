import React from 'react'

/*
* 测试render props
* */
export default class MMouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 13,
    }
  }


  inputHandler = (e) => {
    e.preventDefault();
    let val = e.target.value;
    this.setState(state => {
      return {
        txt: val,
      }
    })
  };


  render() {
    return <div style={{height: '200px', border: '1px solid #333'}}>
      <div>
        <input value={this.state.txt} onChange={(e) => {
          this.inputHandler(e)
        }} type="text"/>
      </div>
      {this.props.render(this.state.txt)}
    </div>
  }
}
