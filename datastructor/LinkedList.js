function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = function (element) {
        let node = new Node(element);
        let current = null;
        if (!head) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.insert = function (position, element) {
        if (position > -1 && position < length) {
            let node = new Node(element);
            let current = head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
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
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
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
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// console.log(list.removeAt(1));
console.log(list.insert(1, 8));
// console.log(list.size());
console.log(list.indexOf(0));
console.log(list.indexOf(3));
console.log(list.toString());
console.log(list.remove(2));
console.log(list.toString());