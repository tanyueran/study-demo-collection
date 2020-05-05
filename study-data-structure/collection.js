/*
* 集合
* */
class Collection {
  constructor() {
    this.collection = {};
  }

  // 判断是否存在元素
  has(ele) {
    return this.collection.hasOwnProperty(ele);
  }

  // 添加
  // 注意：此处有问题，如果ele为对象时，这个中方式应该需要修改的
  add(ele) {
    if (this.has(ele)) {
      return false;
    }
    this.collection[ele] = true;
    return true;
  }

  // 删除
  remove(ele) {
    if (!this.has(ele)) {
      return false;
    }
    delete this.collection[ele];
  }

  // 清空
  clear() {
    this.collection = {};
  }

  // 获取长度
  size() {
    return Object.keys(this.collection).length;
  }

  // 获取所有的值
  values() {
    return Object.keys(this.collection);
  }

  // 并集
  union(otherCollection) {
    let values = this.values(),
      newCollection = new Collection();
    values.forEach(item => {
      newCollection.add(item);
    });
    values = otherCollection.values();
    values.forEach(item => {
      newCollection.add(item);
    });
    return newCollection;
  }

  // 交集
  interception(otherCollection) {
    let values = this.values(),
      newCollection = new Collection();
    values.forEach(item => {
      if (otherCollection.has(item)) {
        newCollection.add(item);
      }
    });
    return newCollection;
  }

  // 差集
  difference(otherCollection) {
    let values = this.values(),
      newCollection = new Collection();
    values.forEach(item => {
      if (!otherCollection.has(item)) {
        newCollection.add(item);
      }
    });
    return newCollection;
  }

  // 判断是否为子集
  isSub(otherCollection) {
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherCollection.has(values[i])) {
        return false;
      }
    }
    return true;
  }
}

let c = new Collection();
c.add('1');
c.add('2');
c.add('3');
let c2 = new Collection();
c2.add('2');
c2.add('3');
c2.add('4');
let c3 = c.union(c2);
console.log(c3.values());
let c4 = c.interception(c2);
console.log(c4.values());
console.log(c2.isSub(c3));
console.log(c.difference(c2).values());

