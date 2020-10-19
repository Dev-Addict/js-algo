const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let isSwap = false;
        for (let j = 0; j < arr.length - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                isSwap = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        if (!isSwap)
            break;
    }
    return arr;
};

console.log(bubbleSort([23, 45, 6, 12, 13]));
