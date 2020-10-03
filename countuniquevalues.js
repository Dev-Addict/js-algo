const countUniqueValues = arr => {
    let p1 = 0;
    let p2 = 1;
    while (p2 < arr.length) {
        if (!(arr[p1] === arr[p2])) {
            p1++;
            arr[p1] = arr[p2];
        }
        p2++;
    }

    return p1 + 1;
};

console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
