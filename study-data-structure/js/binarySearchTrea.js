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

  // 获取最大值
  max() {
    let node = this.root;
    let key = null;
    while (node !== null) {
      key = node.key;
      node = node.right;
    }
    return key;
  }

  // 获取最小值
  min() {
    let node = this.root;
    let key = null;
    while (node !== null) {
      key = node.key;
      node = node.left;
    }
    return key;
  }

  // 根据key搜索数
  search(key) {
    let node = this.root;
    while (node !== null) {
      if (node.key > key) {
        node = node.left;

      } else if (node.key < key) {
        node = node.right;

      } else {
        return true;
      }
    }
    return false;
  }

  // 删除节点
  remove(key) {
    if (this.root === null) {
      return false;
    }
    // 1.首先查找节点
    let current = this.root;// 当前节点
    let parentNode = null; // 父节点
    let isLeftChild = true; // 判断是否是父节点的左节点
    // 查找删除节点
    while (current.key !== key) {
      parentNode = current;
      if (current.key > key) {
        current = current.left;
        isLeftChild = true;
      } else {
        current = current.right;
        isLeftChild = false;
      }
    }
    // 没有找到需要删除的节点
    if (current === null) return false;
    // 2.删除节点
    //  2.1 只有一个节点的情况
    if (current.left === null && current.right === null) {
      if (current === this.root) { // 唯一的节点为root
        this.root = null
      } else if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    }
    //  2.2 被删除的节点只有一个子节点的情况
    else if (current.left === null && current.right !== null) {// 右节点
      if (current === this.root) {// 当前元素就是root
        this.root = current.right;
      } else if (isLeftChild) {
        parentNode.left = current.right;
      } else {
        parentNode.right = current.right;
      }
    } else if (current.right === null && current.left !== null) {// 左节点
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parentNode.left = current.left;
      } else {
        parentNode.right = current.left;
      }
    }
    //  2.3 被删除的节点有两个子节点的情况
    //     注意：被删除节点的替换一般使用其的前驱或者后继
    else {
      // 查找后继节点
      let successor = this._getSuccessor(current);
      // 将后继节点替换原来的节点
      if (current === this.root) {// 被删除的即是root
        this.root = successor
      } else if (isLeftChild) {
        parentNode.left = successor;
      } else {
        parentNode.right = successor;
      }
      // 将后继节点的左节点 连接 被删除元素的左节点
      successor.left = current.left;
    }
    return current;
  }

  // 查询node节点的后继节点，供给删除使用
  _getSuccessor(node) {
    // 查询后继循环遍历右子树，再一直往左找
    let current = node.right;
    let successor = null;
    let parentNode = null;
    while (current !== null) {
      parentNode = successor;
      successor = current;
      current = current.left;
    }
    // 判断后继节点是否为node节点的直接右节点
    if (successor !== node.right) {
      parentNode.left = successor.right;
      successor.right = node.right;
    }
    return successor;
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

tree.remove(52);


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


console.log('最大值' + tree.max());
console.log('最小值' + tree.min());

console.log('搜索存在29吗？' + tree.search(29));
console.log('搜索存在200吗？' + tree.search(200));
