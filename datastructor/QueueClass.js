let Queue = (function () {
    let items = new WeakMap();

    class Queue {
        constructor() {
            items.set(this, []);
        }

        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }

        front() {
            let q = items.get(this);
            return q[0];
        }

        isEmpty() {
            return items.get(this).length == 0;
        }

        size() {
            return items.get(this).length;
        }

        print() {
            console.log(items.get(this).toString());
        }
    }

    return Queue;
})();

// let q1 = new Queue();
// q1.enqueue('ppm');
// q1.enqueue('ppm2');
// q1.print();


// 优先队列
function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement);
        }
    };
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };
}

// test
// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('ppm', 2);
// priorityQueue.enqueue('mpp', 1);
// priorityQueue.enqueue('keller', 1);
// priorityQueue.print();

// 击鼓传花
function hotPototo(nameLists, num) {
    let queue = new Queue();
    for (let i = 0; i < nameLists.length; i++) {
        queue.enqueue(nameLists[i]);
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '被淘汰了');
    }
    return queue.dequeue();
}

//test
let name = ['ppm1', 'ppm2', 'ppm3', 'ppm4', 'ppm5', 'ppm6'];
let winner = hotPototo(name, 7);
console.log('winner is ' + winner);