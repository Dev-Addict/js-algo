class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp(this.values.length - 1);
    }

    bubbleUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.values[index] > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
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
            if (this.values[index] < this.values[leftChildIndex]) {
                [this.values[index], this.values[leftChildIndex]] =
                    [this.values[leftChildIndex], this.values[index]];
                return;
            }
        if (this.values[leftChildIndex] > this.values[index] ||
            this.values[rightChildIndex] > this.values[index]) {
            if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
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

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(10);
maxBinaryHeap.insert(8);
maxBinaryHeap.insert(9);
maxBinaryHeap.insert(11);
maxBinaryHeap.insert(11);
maxBinaryHeap.insert(11);

maxBinaryHeap.remove(2);

console.log(maxBinaryHeap.values);
