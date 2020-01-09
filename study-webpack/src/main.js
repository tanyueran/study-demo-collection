/**
 * @author tanxin
 * @date $
 * @Description: webpack 的入口函数
 */
// 引入scss
import './style/basic.scss';
// 引入图片
import img from './images/1.jpg';

function component() {
  let container = document.createElement('div');

  let image = new Image();
  image.src = img;
  container.appendChild(image);

  return container;
}

document.body.appendChild(component());
