/**
 * Created by kellerme on 2018/6/11
 */
function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    let root = null;
    // 插入节点
    let insertNode = function (node, newNode) {
        if (node.key > newNode.key) {
            if (node.left) {
                insertNode(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else {
            if (node.right) {
                insertNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        }
    };
    this.insert = function (key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };
    // 中序遍历
    this.inOrderTraverse = function (callback) {
        let inOrderTraverseNode = function (node, callback) {
            if (node) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        };
        inOrderTraverseNode(root, callback);
    };

    // 先序遍历
    this.preOrderTraverse = function (callback) {
        let preOrderTraverseNode = function (node, callback) {
            if (node) {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        };
        preOrderTraverseNode(root, callback);
    };

    // 后序遍历
    this.postOrderTraverse = function (callback) {
        let postOrderTraverseNode = function (node, callback) {
            if (node) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        };
        postOrderTraverseNode(root, callback);
    };

    // 最小值
    let minNode = function (node) {
        if (node) {
            while (node && node.left) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    this.min = function () {
        return minNode(root);
    };

    // 最大值
    let maxNode = function (node) {
        if (node) {
            while (node && node.right) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.max = function () {
        return maxNode(root);
    };
    let searchNode = function (node, key) {
        if (!node) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };
    // 寻找特定值
    this.search = function (key) {
        return searchNode(root, key);
    };

    findMinNode = function (node) {
        while (node && node.left!==null) {
            node = node.left;
        }
        return node;
    };
    let removeNode = function (node, key) {
        if (!node) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            // 一个叶节点
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            // 有一个子节点的节点
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }
            // 有两个节点
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };
    this.remove = function (key) {
        root = removeNode(root, key);
    };
}



// test
let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(6);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
let printNode = function (value) {
    console.log(value);
};
tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);
// console.log(tree.min());
// console.log(tree.max());
tree.remove(7);
tree.inOrderTraverse(printNode);