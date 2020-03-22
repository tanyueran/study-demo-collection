import React, {useState, useEffect} from 'react'
import Comp from './gaojiehanshu/Comp.js'


// 自定义Hook
function isDouble(init) {
  const [num, setNum] = useState(init);
  useEffect(() => {
    let timer = setTimeout(() => {
      setNum(Math.ceil(Math.random() * 100));
    }, 1000);
    return () => {
      console.log(timer);
      clearTimeout(timer);
    };
  }, [init]);

  return (num % 2) === 0;
}

export default (props) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState({obj: 1});
  const a = isDouble(count);

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div>
      <h1>about</h1>
      <hr/>
      <h2>模拟状态组件服用-高阶函数</h2>
      <div>
        是单数吗：{a ? '是的' : '不是'}
      </div>
      <Comp/>
      <p>
        <button onClick={() => {
          setCount(count + 1);
          setText({ab: 1});
        }}>click me了{count}次
        </button>
        // hook设置的state时总是替换
        {JSON.stringify(text)}
      </p>
    </div>
  );
}
