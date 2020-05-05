/*
* 双向链表
* */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 添加元素
  append(data) {
    let newNode = new Node(null, data, null);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  // 插入元素
  insert(position, data) {
    // 越界判断
    if (position < 0 || position > this.length) {
      return false;
    }
    let newNode = new Node(null, data, null);
    if (this.length === 0) {// 链表中没有元素时
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (position === 0) {// 插入第一个元素
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {// 插入最后一个元素
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      } else {
        let index = 0,
          current = this.head;
        while (index++ < position) {
          current = current.next;
        }
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
    this.length++;
    return true;
  }

  // 获取元素
  get(position) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      return null;
    }
    if (position <= (this.length / 2)) {// 从前遍历
      let index = 0,
        current = this.head;
      while (index++ < position) {
        current = current.next;
      }
      return current.data;
    } else { // 从后便利
      let index = this.length,
        current = this.tail;
      while (--index > 0) {
        current = current.prev;
      }
      return current.data;
    }
  }

  // 根据内容获取索引
  indexOf(data) {
    let index = 0,
      current = this.head;
    while (current) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  // 更新内容
  update(position, data) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      return false;
    }
    let current = null;
    if (position <= this.length / 2) {// 向前遍历修改
      let index = 0;
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    } else { // 向后遍历修改
      let index = this.length;
      current = this.tail;
      while (--index > 0) {
        current = current.prev;
      }
    }
    current.data = data;
    return true;
  }

  // 删除
  removeAt(position) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      return null;
    }
    let deleteNode = null;
    // 只有一个节点
    if (this.length === 1) {
      deleteNode = this.head;
      this.head = null;
      this.tail = null;
    } else {// 存在多个节点
      if (position === 0) {// 删除第一个
        deleteNode = this.head;
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {// 删除最后一个
        deleteNode = this.tail;
        this.tail.prev = null;
        this.tail = this.tail.prev;
      } else {
        let current = null;
        if (position <= this.length / 2) {// 顺序便利
          let index = 0;
          current = this.head;
          while (index++ < position) {
            current = current.next;
          }
        } else { // 倒叙便利
          let index = this.length;
          current = this.tail;
          while (--index > 0) {
            current = current.prev;
          }
        }
        deleteNode = current;
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    this.length--;
    return deleteNode.data;
  }

  // 根据内容删除
  remove(data) {
    let index = this.indexOf(data);
    return this.removeAt(index);
  }

  // 获取第一个
  getHead() {
    return this.head.data;
  }

  // 获取最后一个
  getTail() {
    return this.tail.data;
  }

  // 是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 默认打印
  toString() {
    return this.forwardToString();
  }

  // 顺序打印
  forwardToString() {
    let current = this.head,
      str = '';
    while (current) {
      str += current.data + ' ';
      current = current.next;
    }
    return str;
  }

  // 倒叙打印
  backwardToString() {
    let current = this.tail,
      str = '';
    while (current) {
      str += current.data + ' ';
      current = current.prev;
    }
    return str;
  }
}

// 节点
class Node {
  constructor(prev, data, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}


let l = new DoublyLinkedList();
l.append(1);
l.append(2);
l.append(3);
console.log(l.toString());
console.log(l.forwardToString());
console.log(l.backwardToString());
l.insert(0, 0);
console.log(l.toString());
l.insert(4, 4);
console.log(l.toString());
l.insert(2, '2--');
console.log(l.toString());
console.log(l.get(2));
console.log(l.get(5));
console.log('indexOf:' + l.indexOf(2));
l.update(2, 2);
console.log(l.toString());
l.removeAt(0);
console.log(l.removeAt(2));
console.log(l.toString());
l.remove(2);
console.log(l.toString());
