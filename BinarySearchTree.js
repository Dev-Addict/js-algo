class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertIn(val, node) {
        node.val > val ?
            node.left ? this.insertIn(val, node.left) : node.left = new Node(val) :
            node.right ? this.insertIn(val, node.right) : node.right = new Node(val);
    }

    insert(val) {
        if (!this.root) this.root = new Node(val);
        else this.insertIn(val, this.root)
    }

    find(val, node = this.root) {
        if (!node) return false;
        if (node.val === val) return true;
        return this.find(val, node.val > val ? node.left : node.right);
    }

    breadthFirstSearch() {
        const data = [],
            queue = [];

        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();
            data.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    depthFirstSearchPreOrder(node = this.root) {
        if (!node) return [];
        return [node.val, ...this.depthFirstSearchPreOrder(node.left), ...this.depthFirstSearchPreOrder(node.right)];
    }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(20);

console.log(binarySearchTree.depthFirstSearchPreOrder());
