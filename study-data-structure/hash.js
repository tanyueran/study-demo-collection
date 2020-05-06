/*
* 哈希函数
* 1、将字符串转换成一个比较大的数值（霍纳算法）
* 2、通过取余压缩数值
* */
function hashFunc(str, length) {
  let hashCode = 0;
  // 霍纳算法
  for (let i = 0; i < str.length; i++) {
    hashCode = hashCode * 37 + str.charCodeAt(i);
  }
  return hashCode % length;
}

// 质数判断 --- 低效率
function isPrime(num) {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 质数判断 ---- 效率该井
function isPrime2(num) {
  let j = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= j; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 哈希表（拉链表和开放表的两种方式）
// 下面的时拉链表的方式
class HashTable {
  constructor() {
    this.storage = [];
    // 一般大小查过0.75 时需要扩容，小于0.25时需要减容
    this.length = 0;
    this.limit = 7;
  }

  // 添加修改函数
  put(key, value) {
    // 计算hashCode
    let hashCode = hashFunc(key, this.limit);
    // 获取对应的
    if (this.storage[hashCode] === undefined) { // 不存在时
      this.storage[hashCode] = [];
    }
    // 遍历链表（数组）
    for (let i = 0; i < this.storage[hashCode].length; i++) {
      let item = this.storage[hashCode][i];
      if (item[0] === key) {
        item[1] = value;
      }
    }
    this.storage[hashCode].push([key, value]);
    this.length++;

    // 判断是否需要扩容
    if (this.length > this.limit * 0.75) {
      this.resize(this._getPrime(this.limit * 2));
    }
  }

  // 获取
  get(key) {
    // 计算对应的hashCode
    let hashCode = hashFunc(key, this.limit);
    // 获取对应的
    if (this.storage[hashCode] === undefined) {
      return null;
    }
    // 遍历查找
    for (let i = 0; i < this.storage[hashCode].length; i++) {
      let item = this.storage[hashCode][i];
      if (item[0] === key) {
        return item[1];
      }
    }
    return null;
  }

  // 删除
  remove(key) {
    // 计算对应的hashCode
    let hashCode = hashFunc(key, this.limit);
    // 获取对应的
    if (this.storage[hashCode] === undefined) {
      return null;
    }
    // 遍历查找
    for (let i = 0; i < this.storage[hashCode].length; i++) {
      let item = this.storage[hashCode][i];
      if (item[0] === key) {
        this.storage[hashCode].splice(i, 1);
        this.length--;
        // 判断是否需要缩容
        if (this.limit >= 7 && this.length / this.limit < 0.25) {
          this.resize(this._getPrime(Math.floor(this.limit / 2)));
        }
        return item[1];
      }
    }
    return null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  // 判断是否为一个质数
  _isPrime(num) {
    let s = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // 获取一个质数
  _getPrime(num) {
    while (!this._isPrime(num)) {
      num++;
    }
    return num;
  }

  // 哈希表扩容\缩容
  resize(limit) {
    console.log('容量改变了' + limit);
    let oldStorage = this.storage;
    this.length = 0;
    this.storage = [];
    this.limit = limit;
    for (let i = 0; i < oldStorage.length; i++) {
      let a = oldStorage[i];
      if (a !== undefined) {
        for (let j = 0; j < oldStorage[i].length; j++) {
          this.put(oldStorage[i][j][0], oldStorage[i][j][1]);
        }
      }
    }
  }

  toString() {
    let str = '{';
    this.storage.forEach(item => {
      item.forEach(list => {
        str += `${list[0]}:${list[1]},`;
      })
    });
    str = (str.slice(0, -1) + '}');
    return str;
  }
}


let hashTable = new HashTable();
hashTable.put('name', 'zhangsnag');
hashTable.put('age', 12);
console.log(hashTable.toString());
console.log(hashTable.get('name'));
console.log(hashTable.remove(234234));
console.log(hashTable.remove('name'));
console.log(hashTable.get('name'));
console.log(hashTable.size());
console.log(hashTable.isEmpty());
hashTable.put('sez', '男')
console.log(hashTable.toString());
hashTable.put('money', '100000')
console.log(hashTable.toString());
hashTable.put('addr', '中国')
console.log(hashTable.toString());
hashTable.put('hobby', 'ball')
console.log(hashTable.toString());
hashTable.put('food', 'dumpling')
console.log(hashTable.toString());
hashTable.remove('food');
console.log(hashTable.toString());
hashTable.remove('addr')
console.log(hashTable.toString());
hashTable.remove('hobby')
console.log(hashTable.toString());
hashTable.remove('money')
hashTable.put('money', '1123')
hashTable.put('money2', '1123')
