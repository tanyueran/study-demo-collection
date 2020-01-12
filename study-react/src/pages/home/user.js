import React, {lazy, Suspense} from 'react'

const MForm = lazy(() => import('../../components/MForm.js'));
const MTestPortal = lazy(() => import('../../components/MTestPortal.js'));
const MMouse = lazy(() => import('../../components/MMouse.js'));
const MCat = lazy(() => import('../../components/MCat.js'));


// 工具函数
import Date2String from '../../utils/Date2String.js'
// 常量
import constant from '../../constant/index.js'

// 创建模式 默认的是light
const ThemeContext = constant.context;

export default class User extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      time: new Date(),
      timer: null,
      contextParams: constant.contextParams.dark,
    };
    this.form = React.createRef();
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
          time: new Date()
        }
      });
    }, 1000);
    console.log("form:");
    console.log(this.form)
  }

  render() {
    // React 元素是不可变对象。
    // 一旦被创建，你就无法更改它的子元素或者属性。
    // 一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
    // 组件有状态改变的话，render函数每次都会被执行
    console.log('render');
    return (<ThemeContext.Provider value={this.state.contextParams}>
      <h1>user</h1>
      <button onClick={this.toggleHandler}>切换主题</button>
      <div style={this.state.styleClass}>
        <p>现在的时间：{Date2String(this.state.time)}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <MForm ref={this.form}/>
        </Suspense>
        {/*测试portal*/}
        <Suspense fallback={<div>Loading...</div>}>
          <MTestPortal>
            测试portal
          </MTestPortal>
        </Suspense>
        {/*鼠标*/}
        <Suspense fallback={<div>Loading...</div>}>
          <MMouse render={state =>
            <MCat txt={state}/>
          }/>
        </Suspense>
      </div>
    </ThemeContext.Provider>)
  }

  toggleHandler = (e) => {
    this.setState(state => {
      if (state.contextParams.theme === 'dark') {
        return {
          contextParams: constant.contextParams.light,
        }
      } else {
        return {
          contextParams: constant.contextParams.dark,
        }
      }
    })
  }
}
