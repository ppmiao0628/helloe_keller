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

    };
    this.indexOf = function (element) {

    };
    this.isEmpty = function () {

    };
    this.size = function () {
        return length;
    };
    this.getHead = function () {

    };
    this.toString = function () {

    };
    this.print = function () {

    };
}

//test
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log(list.removeAt(1));
console.log(list.size());