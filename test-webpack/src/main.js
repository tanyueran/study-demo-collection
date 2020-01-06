/**
 * @author tanxin
 * @date $
 * @Description: webpack 的入口函数
 */

import _ from 'lodash';
import './style/basic.scss';
import img from './images/1.jpg';

function component() {
  let ele = document.createElement('div');

  ele.innerHTML = _.join(['hello', 'webpack'], '-');

  let image = new Image();
  image.src = img;
  ele.appendChild(image);

  return ele;
}

document.body.appendChild(component());
