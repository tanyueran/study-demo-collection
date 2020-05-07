/*
* 二叉搜索数
* */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 插入
  insert(key) {
    let newNode = new Node(key);
    if (this.root === null) { // 根节点为空
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  // 插入节点
  _insertNode(node, newNode) {
    if (node.key > newNode.key) {// 插入左边
      if (node.left === null) { // 左节点为空
        node.left = newNode;
      } else { // 左节点不为空，递归
        this._insertNode(node.left, newNode);
      }
    } else { // 插入右边
      if (node.right === null) {// 右字节点为空
        node.right = newNode;
      } else {// 右子节点不为空，递归
        this._insertNode(node.right, newNode);
      }
    }
  }

  // 先序遍历
  preOrder(callback) {
    this._preOrder(this.root, callback);
  }

  // 节点的先序处理
  _preOrder(node, callback) {
    if (node !== null) {
      // 首先处理节点的数据
      callback(node.key);

      // 然后处理节点的左节点
      this._preOrder(node.left, callback);

      // 最后处理节点的右节点
      this._preOrder(node.right, callback);
    }
  }

  // 中序遍历
  centerOrder(callback) {
    this._centerOrder(this.root, callback);
  }

  // 节点的中序处理
  _centerOrder(node, callback) {
    if (node !== null) {
      // 先处理节点的左节点
      this._centerOrder(node.left, callback);

      // 再处理节点的数据
      callback(node.key);

      // 最后处理节点的右节点
      this._centerOrder(node.right, callback);
    }
  }

  // 后序遍历
  lastOrder(callback) {
    this._lastOrder(this.root, callback);
  }

  // 节点的后序处理
  _lastOrder(node, callback) {
    if (node !== null) {
      // 先处理节点的左节点
      this._lastOrder(node.left, callback);

      // 再处理节点的右节点
      this._lastOrder(node.right, callback);

      // 最后处理节点的数据
      callback(node.key);
    }
  }

}

// 节点
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}


let tree = new BinarySearchTree();
tree.insert(90);
tree.insert(12);
tree.insert(200);
tree.insert(2);
tree.insert(12);
tree.insert(52);


// 先序遍历
console.log('先序遍历')
let preArr = [];
tree.preOrder(key => {
  preArr.push(key);
});
console.log(preArr);

// 中序遍历
console.log('中序遍历')
let centerArr = [];
tree.centerOrder(key => {
  centerArr.push(key);
});
console.log(centerArr);

// 后序遍历
console.log('后序遍历')
let lastArr = [];
tree.lastOrder(key => {
  lastArr.push(key);
});
console.log(lastArr);
