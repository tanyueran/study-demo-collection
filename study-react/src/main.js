/**
 * @author tanxin
 * @date $
 * @Description: 入口函数
 */
import React, {Suspense} from 'react';
import {render} from 'react-dom';
import './css/index.css'

import App from './app.js'

render(
  <App/>,
  document.getElementById('app')
);


