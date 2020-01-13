/**
 * @author tanxin
 * @date $
 * @Description: 入口函数
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// 全局css
import './css/index.css'
import store from './store/index.js'

import App from './app.js'

render(
  // 全局注入store对象
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);


