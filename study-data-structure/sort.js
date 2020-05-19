/*
* 排序算法
* */
function ArrayList(arr) {
  this.list = arr || [];
}

ArrayList.prototype.push = function (item) {
  this.list.push(item);
};

ArrayList.prototype.toString = function () {
  return this.list.join('-')
};

// 冒泡排序
ArrayList.prototype.bubbleSort = function () {
  for (let i = this.list.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (this.list[j] > this.list[i]) {
        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
      }
    }
  }
};

//  选择排序
ArrayList.prototype.selectSort = function () {
  for (let i = 0; i < this.list.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < this.list.length; j++) {
      if (this.list[j] < this.list[minIndex]) {
        minIndex = j;
      }
    }
    [this.list[minIndex], this.list[i]] = [this.list[i], this.list[minIndex]];
  }
};

// 插入排序
ArrayList.prototype.insertSort = function () {
  for (let i = 1; i < this.list.length; i++) {
    // 方式一：
    /*let nullIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (this.list[j] <= this.list[i]) {
        break
      } else {
        nullIndex = j;
      }
    }
    if (nullIndex !== i) {
      let b = this.list.splice(i, 1);
      this.list.splice(nullIndex, 0, b[0]);
    }*/
    // 方式二
    let temp = this.list[i], // temp记录比较的元素值
      j = i;// 保存拿出来作比较的元素索引
    while (temp < this.list[j - 1] && j > 0) {
      // 数据平移
      this.list[j] = this.list[j - 1];
      j--;
    }
    this.list[j] = temp;
  }
};

// 希尔排序
ArrayList.prototype.shellSort = function () {
  let len = this.list.length;
  // 获取间隔
  let gap = Math.floor(len / 2);
  // 间隔循环
  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      let temp = this.list[i];
      let q = i - gap;
      while (this.list[q] > temp && q >= 0) {
        this.list[q + gap] = this.list[q];
        q -= gap;
      }
      this.list[q + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }
};


let arr = [];
for (let i = 0; i < 13; i++) {
  arr.push(Math.ceil(Math.random() * 1000));
}
console.log(arr.join('-'));

console.log('---------------')
console.log('冒泡排序：')
let list = new ArrayList(JSON.parse(JSON.stringify(arr)));
console.time('a');
list.bubbleSort();
console.timeEnd('a');
console.log(list.toString());
console.log('')

console.log('选择排序：')
let list2 = new ArrayList(JSON.parse(JSON.stringify(arr)));
console.time('b');
list2.selectSort();
console.timeEnd('b');
console.log(list2.toString());
console.log('')

console.log('插入排序：')
let list3 = new ArrayList(JSON.parse(JSON.stringify(arr)));
console.time('c');
list3.insertSort();
console.timeEnd('c');
console.log(list3.toString());
console.log('')

console.log('希尔排序：')
let list4 = new ArrayList(JSON.parse(JSON.stringify(arr)));
console.time('d');
list4.shellSort();
console.timeEnd('d');
console.log(list4.toString());

