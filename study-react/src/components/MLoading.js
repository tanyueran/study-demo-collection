/**
 * @author tanxin
 * @date $
 * @Description:
 */
import React from 'react'

export default class MLoading extends React.Component {
  state = {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    }
  };

  render() {
    return <div style={this.state.style}>
      loading...
    </div>
  }
}

