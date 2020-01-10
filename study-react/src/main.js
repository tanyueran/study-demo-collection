/**
 * @author tanxin
 * @date $
 * @Description: 入口函数
 */
import React from 'react';
import {render} from 'react-dom';

class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'body11',
      num: 0,
    }
  }

  render() {
    return <div>
      <p>{this.props.txt}</p>
      <p>num:{this.props.num}</p>
    </div>;
  }

}


render(<Comp/>, document.getElementById('app'));


