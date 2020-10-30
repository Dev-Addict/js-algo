class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);

        if (!this.first)
            this.first = this.last = node;
        else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
    }

    pop() {
        if (!this.first) return null;
        if (this.size === 1) this.last = null;

        const node = this.first;
        this.first = this.first.next;

        this.size--;
        return node.val;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);

console.log(stack);
