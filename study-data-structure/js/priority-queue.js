/**
 * 优先级队列
 */

/*
 * 优先级队列的元素项
 */
class Element {
  // level值大的优先级高
  constructor(level, data) {
    this.level = level;
    this.data = data;
  }

  toString() {
    return this.data + '-' + this.level;
  }
}

/*
 * 优先级队列
 */
class PriorityQueue {
  constructor() {
    this.q = [];
  }

  // 进入时需要判断元素的优先级
  enter(level, data) {
    let node = new Element(level, data);
    if (this.q.length === 0) {
      this.q.push(node);
    } else {
      let bool = false;
      for (let i = 0; i < this.q.length; i++) {
        if (level > this.q[i].level) {
          bool = true;
          if (i === 0) {
            this.q.unshift(node);
            break;
          } else {
            this.q.splice(i - 1, 0, node);
            break;
          }
        }
      }
      if (!bool) {
        this.q.push(node);
      }
    }
  }

  delete() {
    return this.q.shift();
  }

  size() {
    return this.q.length;
  }

  getHead() {
    return this.q[0];
  }

  toString() {
    return this.q.join(" ");
  }

}

let q = new PriorityQueue();
q.enter(10, '张10');
q.enter(20, '张20');
q.enter(40, '张40');
q.enter(0, '张0');
q.enter(110, '张110');
console.log(q.toString());
