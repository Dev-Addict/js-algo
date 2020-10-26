class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // O(1)
    push(val) {
        const node = new Node(val);
        if (this.length) {
            this.tail.next = node;
            this.tail = node;
        } else
            this.head = this.tail = node;
        this.length++;
    }

    // O(n) n = this.length
    pop() {
        if (!this.length) return null;

        if (this.length === 1) {
            let current = this.tail;

            this.head = this.tail = null;
            this.length--;

            return current;
        }

        let current = this.head;
        let newTail;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        newTail.next = null;
        this.tail = newTail;
        this.length--;

        return current;
    }

    // O(1)
    shift() {
        if (!this.length) return null;

        if (this.length === 1) {
            let current = this.head;

            this.head = this.tail = null;
            this.length--;

            return current;
        }

        let current = this.head;

        this.head = this.head.next;
        this.length--;

        return current;
    }

    // O(1)
    unshift(val) {
        const node = new Node(val);

        if (!this.length) {
            this.head = this.tail = node;
            this.length++;
            return node;
        }

        node.next = this.head;
        this.head = node;
        this.length++;

        return node
    }

    // O(n) n = this.length
    get(index) {
        if (Math.abs(index) >= this.length)
            return null;

        const finalIndex = index >= 0 ? index : this.length + index;
        let currentIndex = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (currentIndex === finalIndex)
                return currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }

        return null;
    }

    // O(n)
    set(index, val) {
        const node = this.get(index);

        if (!node) return false;

        node.val = val;

        return true;
    }

    // O(1)
    insert(index, val) {
        if (Math.abs(index) > this.length) return false;
        if (index === 0 || -1 * index - this.length === 0) {
            this.unshift(val);
            return true;
        }
        if (index === this.length) {
            this.push(val);
            return true
        }

        const prevNode = this.get(index >= 0 ? index - 1 : index + 1);
        const node = new Node(val);

        node.next = prevNode.next;
        prevNode.next = node;
        this.length++;

        return true;
    }

    // O(n) n = this.length
    remove(index) {
        if (Math.abs(index) > this.length || index === this.length) return false;
        if (index === 0 || index * -1 === this.length) {
            this.shift();
            return true;
        }
        if (index === -1 || index === this.length - 1) {
            this.pop();
            return true;
        }

        const prevNode = this.get(index >= 0 ? index - 1 : index + 1);

        prevNode.next = prevNode.next.next;
        this.length--;

        return true;
    }

    // O(n) n = this.length
    reverse() {
        [this.head, this.tail] = [this.tail, this.head];

        let prev = null;
        let node = this.tail;
        let next = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }

    convertToArray() {
        const result = [];

        let currentNode = this.head;

        while (currentNode) {
            result.push(currentNode.val);
            currentNode = currentNode.next;
        }

        return result;
    }
}
