// js模拟栈
function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (ele) {
  this.stack.push(ele);
};

Stack.prototype.pop = function () {
  return this.stack.pop();
};

Stack.prototype.size = function () {
  return this.stack.length;
};

Stack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};

Stack.prototype.toString = function () {
  return this.stack.join(' ');
};

/**
 * 基于栈实现十进制转换成二进制
 *  */
function Dec2Bin(num) {
  let s = new Stack();
  while (num > 0) {
    s.push(num % 2);
    num = Math.floor(num / 2);
  }
  let str = "";
  while (!s.isEmpty()) {
    str += s.pop();
  }
  return str;
}

console.log(Dec2Bin(1000));
