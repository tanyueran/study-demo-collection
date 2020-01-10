import './style/index.css';
import file from './imgs/1.jpg';

interface comp{
  name:string,
}

// 组件
class Component implements comp{
  name: string;
  _obj:HTMLElement;

  constructor(name:string) {
    this.name = name;
    this._obj = document.createElement(name);
  }

  // 添加子元素
  appendChild(comp:HTMLElement){
    this._obj.appendChild(comp);
  }

  // 删除子元素
  delChild(comp:HTMLElement){
    this._obj.removeChild(comp);
  }

  public get instance():HTMLElement{
    return this._obj;
  }
}

let div:Component = new Component('div');

// 给img添加动态属性
let img:{
  [key:string]:any
} = new Image();
img.src = file;

div.appendChild(img as HTMLElement);

let p:HTMLElement = document.createElement('p');
p.innerText = `lorem `;

div.appendChild(p);

let img2:any = new Image();
img.src = file;

div.appendChild(img2 as HTMLElement);

document.body.appendChild(div.instance);
