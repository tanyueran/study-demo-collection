import React from 'react';

export const AddProp = Comp => {
  let num = 1;//被复用的数据
  // 给传入的组件添加props了
  return props => <Comp num={num} {...props}/>
};