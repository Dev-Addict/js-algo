class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);

        if (!this.first)
            this.first = this.last = node;
        else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
    }

    dequeue() {
        if (!this.first) return null;
        if (this.size === 1) this.last = null;

        const node = this.first;
        this.first = this.first.next;

        this.size--;
        return node.val;
    }
}
