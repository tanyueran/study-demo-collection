import React, {Suspense} from 'react';
import MInput from "./MInput.js";

import constant from '../constant/index.js'

// 使用react 懒加载
// 配合suspense使用：<Suspense fallback={<div>loading...</div>}><MList/></Suspense>
// import MList from './components/MList.js';
const MList = React.lazy(() => import('../components/MList.js'));

// 上下文
const ThemeContext = constant.context;

export default class MForm extends React.Component {
  // 设置获取的context类型
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      styleClass: {
        border: '1px solid #efefef',
        borderRadius: '5px',
        margin: '0 auto',
        width: '500px',
        align: 'center',
        padding: '50px 10px',
      },
      list: [
        {id: 1, name: '小明', hobby: '下象棋'},
        {id: 2, name: '小张', hobby: '看书'},
      ],
      // 用户监听输入的内容
      username: '',
      hobby: '',
    }
  }

  render() {
    return <ThemeContext.Consumer>
      {
        value => {
          return <>
            <form data-context={JSON.stringify(value)} className={'theme-' + this.context.theme}
                  onSubmit={this.submitHandler.bind(this)}>
              <MInput p="username" parent={this} label="姓名：" type="text" placeholder="请输入姓名">
                <span>传入的子组件内容</span>
              </MInput>
              <MInput p="hobby" parent={this} label="爱好：" type="text" placeholder="请输入爱好">
                <span>传入的子组件内容</span>
              </MInput>
              <div className="text-center">
                <button type="submit">新增</button>
              </div>
            </form>
            {/*列表*/}
            <Suspense fallback={<div>Loading...</div>}>
              <MList data={this.state.list}/>
            </Suspense>
          </>
        }
      }
    </ThemeContext.Consumer>
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState(state => {
      let list = [...state.list];
      list.push({
        id: new Date().getTime(),
        name: state.username,
        hobby: state.hobby,
      });
      console.log(list)
      return {
        list,
      }
    });
    this.setState(state => {
      return {
        username: '',
        hobby: '',
      }
    });
  }
}