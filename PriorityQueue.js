class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    insert(val, priority) {
        const node = new Node(val, priority);

        this.values.push(node);
        this.bubbleUp(this.values.length - 1);
    }

    bubbleUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (this.values[index]?.priority < this.values[parentIndex]?.priority) {
            [this.values[index], this.values[parentIndex]] =
                [this.values[parentIndex], this.values[index]];
            this.bubbleUp(parentIndex);
        }
    }

    remove(index) {
        [this.values[index], this.values[this.values.length - 1]] =
            [this.values[this.values.length - 1], this.values[index]];
        const result = this.values.pop();
        this.bubbleUp(index);

        return result;
    }

    bubbleDown(index) {
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        if (leftChildIndex >= this.values.length) return;
        if (rightChildIndex > this.values.length) return;
        if (rightChildIndex === this.values.length)
            if (this.values[index]?.priority > this.values[leftChildIndex]?.priority) {
                [this.values[index], this.values[leftChildIndex]] =
                    [this.values[leftChildIndex], this.values[index]];
                return;
            }
        if (this.values[leftChildIndex]?.priority < this.values[index]?.priority ||
            this.values[rightChildIndex]?.priority < this.values[index]?.priority) {
            if (this.values[leftChildIndex] < this.values[rightChildIndex]) {
                [this.values[leftChildIndex], this.values[index]] =
                    [this.values[index], this.values[leftChildIndex]];
                this.bubbleUp(leftChildIndex);
            } else {
                [this.values[rightChildIndex], this.values[index]] =
                    [this.values[index], this.values[rightChildIndex]];
                this.bubbleUp(rightChildIndex);
            }
        }
    }
}

const priorityQueue = new PriorityQueue();

priorityQueue.insert('task 1', 2);
priorityQueue.insert('task 2', 1);
priorityQueue.insert('task 3', 3);
priorityQueue.insert('task 4', 3);

priorityQueue.remove(1);

console.log(priorityQueue.values);
