/**
 * @author tanxin
 * @date $
 * @Description: webpack 的入口函数
 */
// 引入scss
import './style/basic.scss';
// 引入图片
import img from './images/1.jpg';

// 引入ts
import Utils from './ts/utils.ts';

function component(): Node {
  let container = document.createElement('div');

  let image = new Image();
  image.src = img;
  container.appendChild(image);

  let div = document.createElement('div');
  div.innerHTML = Utils.Json2Str({name: '张三', age: 22});

  div.innerHTML += `数字1大于数字2：${Utils.NumberCompare({num1: 1, num2: 3})}`;

  container.appendChild(div);


  return container;
}

document.body.appendChild(component());
