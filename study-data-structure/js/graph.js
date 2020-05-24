const Queue = require('./queue.js');

/*
* 无向图
* 图的表示方式：1、二位数组（邻接矩阵）2、字典链表
* */
class Graph {
  constructor() {
    // 顶点
    this.vertex = [];
    // 边
    this.edges = {};
  }

  // 添加顶点
  addVertex(v) {
    if (this.vertex.indexOf(v) === -1) {
      this.vertex.push(v);
      // 初始化他的对应的边
      this.edges[v] = [];
      return true;
    }
    return false;
  }

  // 添加边
  addEdge(v1, v2) {
    if (this.edges[v1].indexOf(v2) === -1) {
      this.edges[v1].push(v2);
    }
    if (this.edges[v2].indexOf(v1) === -1) {
      this.edges[v2].push(v1);
    }
  }

  toString() {
    let str = '';
    this.vertex.forEach(i => {
      str += i;
      str += '=>';
      this.edges[i].forEach(j => {
        str += (j + ' ');
      });
      str += '\n';
    });
    return str;
  }

  // 初始化顶点的颜色,white(未访问) gray（访问了，未探索） black（访问了，探索了）
  // 作用：为了广度优先遍历和深度优先遍历使用
  _initColor() {
    let colors = [];
    this.vertex.forEach(i => colors[i] = 'white');
    return colors;
  }

  // 广度优先遍历
  bfs(initVertex, handler) {
    // 初始化颜色
    let colors = this._initColor();
    // 创建一个队列
    let queue = new Queue();
    queue.enter(initVertex);

    while (!queue.isEmpty()) {
      // 取出节点
      let v = queue.delete();
      // 改变颜色状态，防止后面再次加入
      colors[v] = 'gray';
      let list = this.edges[v];
      for (let i = 0; i < list.length; i++) {
        if (colors[list[i]] === 'white') {
          queue.enter(list[i]);
        }
      }
      colors[v] = 'black';
      handler(v);
    }
  }

  // 深度优先遍历
  // 使用递归
  dfs(initVertex, handler) {
    // 初始化颜色
    let colors = this._initColor();
    this._dfs(initVertex, colors, handler);
  }

  _dfs(vertex, colors, handler) {
    // 如果没有访问过
    if (colors[vertex] === 'white') {
      let list = this.edges[vertex];
      colors[vertex] = 'gray';
      handler(vertex);
      for (let i = 0; i < list.length; i++) {
        this._dfs(list[i], colors, handler);
      }
      colors[vertex] = 'black';
    }
  }
}

let g = new Graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
g.addEdge('a', 'b');
g.addEdge('a', 'f');
g.addEdge('b', 'a');
g.addEdge('e', 'f');
g.addEdge('d', 'c');
g.addEdge('c', 'a');

console.log('打印=======START');
console.log(g.toString());
console.log('打印=======END');

console.log('');

console.log('广度遍历：=======START');
g.bfs('a', (v) => {
  console.log(v);
});
console.log('广度遍历：=======END');

console.log('深度遍历：=======START');
g.dfs('a', (v) => {
  console.log(v);
});
console.log('深度遍历：=======END');
