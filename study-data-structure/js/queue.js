/**
 * 队列
 */
class Queue {
  constructor() {
    this.q = [];
  }

  enter(ele) {
    this.q.push(ele);
  }

  delete() {
    return this.q.shift();
  }

  size() {
    return this.q.length;
  }

  isEmpty() {
    return this.q.length === 0;
  }

  getHead() {
    return this.q[0];
  }

  toString() {
    return this.q.join(" ");
  }
}

/*
let q = new Queue();
q.enter(1);
q.enter(2);
q.enter(3);
q.enter(4);
console.log(q.toString());
q.delete();
console.log(q.toString());*/

/**
 * 案例：击鼓传花，一群人，从1-一个数，每次到这个数的人，淘汰，最后剩下的人为胜者。
 */
function dodo(nameList, num) {
  let q = new Queue();
  nameList.forEach(item => {
    q.enter(item);
  });
  console.log(q);
  let i = 0;
  while (q.size() > 1) {
    i++;
    if (i === num) {
      console.log(q.delete());
      i = 0;
    } else {
      q.enter(q.delete());
    }
  }
  return q.getHead();
}

// console.log('最后的' + dodo(['张三', '李四', '赵五'], 3));

module.exports = Queue;
