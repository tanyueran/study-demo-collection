/**
 * 单向链表
 */

/*
 * 链表项
 */
class Element {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*
 * 单项链表对象
 */
class LinkedList {
  constructor() {
    // 链表的头部
    this.head = null;
    // 链表的元素个数
    this.length = 0;
  }

  // 添加节点
  append(data) {
    let newNode = new Element(data);
    // 原本是空链表
    if (this.length === 0) {
      this.head = newNode;
    } else { // 不是空链表
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    ++this.length;
  }

  // 插入
  insert(position, data) {
    // 首先进行越界判断
    if (position < 0 || position > this.length) {
      return false;
    }
    let newNode = new Element(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0,
        current = this.head,
        previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true;
  }

  // 根据数据内容查找索引值
  indexOf(data) {
    let index = 0,
      current = this.head;
    while (index < this.length) {
      if (current.data === data) {
        return index;
      } else {
        current = current.next;
      }
      index++;
    }
    return -1;
  }

  // 根据位置获取元素
  get(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let index = 0,
      current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }

  // 更新元素
  update(position, data) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let index = 0,
      current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  }

  // 根据位置删除节点
  removeAt(position) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      return false;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0,
        current = this.head,
        previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return true;
  }

  // 根据内容删除元素
  remove(data) {
    let index = this.indexOf(data);
    return this.removeAt(index);
  }

  // 输出
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + ' ';
      current = current.next;
    }
    return str;
  }
}


let linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');
linkedList.insert(2, 2);
console.log(linkedList.toString());
console.log('indexOf', linkedList.indexOf('d'));
linkedList.update(0, 'a-');
console.log(linkedList.toString());
linkedList.removeAt(2);
console.log(linkedList.toString());
linkedList.remove('a-');
console.log(linkedList.toString());
linkedList.update(0, 'b-');
console.log(linkedList.toString());
console.log(linkedList.get(0));


