const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min])
                min = j;
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }

    return arr;
};

console.log(selectionSort([34, 22, 10, 17, 13]));
