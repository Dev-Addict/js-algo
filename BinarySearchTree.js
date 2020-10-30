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
}
