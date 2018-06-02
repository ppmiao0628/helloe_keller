/**
 * Created by kellerme on 2018/6/2
 */
function DoubleLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0;
    let head = null;
    let tail = null;
    this.append = function (element) {
        this.insert(length, element);
    };
    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                current.prev = node;
                previous.next = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                head = current.next;
                if (length === 1) {
                    tail = null;    //只有一项的时候，更新tail
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.getHead = function () {
        return head;
    };
    this.toString = function () {
        let current = head;
        let string = '';
        while (current) {
            string += current.element + (current.next ? ',' : '');
            current = current.next;
        }
        return string;
    };
    this.print = function () {
        return this.toString();
    };
}

//test
let list = new DoubleLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// console.log(list.removeAt(1));
// console.log(list.insert(1, 8));
// console.log(list.size());
// console.log(list.indexOf(0));
// console.log(list.indexOf(3));
console.log(list.toString());
console.log(list.removeAt(2));
console.log(list.toString());