/**
 * 单向链表
 */

// 链表项
class Element {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 单项链表对象
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // 添加节点
    append(data) {
        let newNode = new Element(data);
        if (this.length === 0) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length += 1;
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
console.log(linkedList.toString())