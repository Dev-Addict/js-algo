class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const node = new Node(val);

        if (this.length) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else
            this.head = this.tail = node;

        this.length++;

        return node.val
    }

    pop() {
        if (!this.length) return null;

        const result = this.tail;

        if (this.length === 1) {
            this.head = this.tail = null;
            this.length--;

            return result;
        }

        this.tail = result.prev;
        this.tail.next = null;
        this.length--;

        return result.val;
    }

    shift() {
        if (!this.length) return null;

        const result = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
            this.length--;

            return result.val;
        }

        this.head = this.head.next;
        this.head.prev = null;
        this.length--;

        return result.val;
    }

    unshift(val) {
        const node = new Node(val);

        if (!this.length) {
            this.head = this.tail = node;
            this.length++;

            return node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;

        return node;
    }

    getNode(index) {
        if (Math.abs(index) >= this.length) return null;

        const finalIndex = index >= 0 ? index : this.length + index;

        if (finalIndex < Math.floor(this.length / 2)) {
            let currentIndex = 0;
            let currentNode = this.head;

            while (currentNode) {
                if (currentIndex === finalIndex)
                    return currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
        } else {
            let currentIndex = this.length - 1;
            let currentNode = this.tail;

            while (currentNode) {
                if (currentIndex === finalIndex)
                    return currentNode;
                currentNode = currentNode.prev;
                currentIndex--;
            }
        }

        return null;
    }

    get(index) {
        if (Math.abs(index) >= this.length) return null;

        const finalIndex = index >= 0 ? index : this.length + index;

        if (finalIndex < Math.floor(this.length / 2)) {
            let currentIndex = 0;
            let currentNode = this.head;

            while (currentNode) {
                if (currentIndex === finalIndex)
                    return currentNode.val;
                currentNode = currentNode.next;
                currentIndex++;
            }
        } else {
            let currentIndex = this.length - 1;
            let currentNode = this.tail;

            while (currentNode) {
                if (currentIndex === finalIndex)
                    return currentNode.val;
                currentNode = currentNode.prev;
                currentIndex--;
            }
        }

        return null;
    }

    set(index, val) {
        const node = this.getNode(index);

        if (!node) return false;

        node.val = val;

        return true;
    }

    inset(index, val) {
        if (Math.abs(index) > this.length) return false;
        if (index === 0 || -1 * index - this.length === 0) {
            this.unshift(val);
            return true;
        }
        if (index === this.length) {
            this.push(val);
            return true
        }

        const prevNode = this.getNode(index >= 0 ? index - 1 : index + 1);
        const node = new Node(val);

        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next.prev = node;
        prevNode.next = node;
        this.length++;

        return true;
    }

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

        const prevNode = this.getNode(index >= 0 ? index - 1 : index + 1);

        prevNode.next = prevNode.next.next;
        prevNode.next.prev = prevNode;
        this.length--;

        return true;
    }

    reverse() {
        let prevNode = null;
        let currentNode  = this.head;
        let nextNode = null;

        for (let i = 0; i < this.length; i++) {
            prevNode = currentNode.prev;
            nextNode = currentNode.next;
            if (prevNode === null) {
                this.tail = currentNode;
                currentNode.next = null;
                currentNode.prev = nextNode;
            } else if (nextNode === null) {
                this.head = currentNode;
                currentNode.next = prevNode;
                currentNode.prev = null;
            } else {
                currentNode.next = prevNode;
                currentNode.prev = nextNode;
            }

            currentNode = nextNode;
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
