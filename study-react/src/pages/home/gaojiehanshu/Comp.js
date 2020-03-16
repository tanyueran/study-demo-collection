import React from 'react'
import {AddProp} from './addProp.js'

const Comp = props => <div>通过高阶函数获取的复用state的值:{props.num}</div>;

export default AddProp(Comp);