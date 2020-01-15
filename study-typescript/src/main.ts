import './style/index.css';
import file from './imgs/1.jpg';

/*
* 声明接口  可用于：1、类去继承、2、约束对象等
* 2、let obj: comp = {
*   name: "name"
* };
* */
interface comp {
  name: string,
}

/*
* 1、类继承接口
* 接口作用：约束类必须要有接口中的属性和方法
* */
class Component implements comp {
  name: string;
  _obj: HTMLElement;

  constructor(name: string) {
    this.name = name;
    this._obj = document.createElement(name);
  }

  // 添加子元素
  /*
  * @param: "com: HTMLElement" HTMLElement约束参数的类型
  * @return： "appendChild(): void" void限制放回的类型表示没有返回值
  * */
  appendChild(comp: HTMLElement): void {
    this._obj.appendChild(comp);
  }

  // 删除子元素
  delChild(comp: HTMLElement): void {
    this._obj.removeChild(comp);
  }

  public get instance(): HTMLElement {
    return this._obj;
  }
}

let div: Component = new Component('div');

/*
* 如果对象的key：value均不确定时，可以使用下面的方式
* */
let img: {
  [key: string]: any
} = new Image();
img.src = file;

/*
* 类型出现解析问题时（满足规范使用时，不满足ts）使用下面的方式
* */
div.appendChild(img as HTMLElement);

let p: HTMLElement = document.createElement('p');
p.innerText = `lorem `;

div.appendChild(p);

let img2: any = new Image();
img.src = file;

div.appendChild(img2 as HTMLElement);

document.body.appendChild(div.instance);
