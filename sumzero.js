const sumZero1 = (arr) => {
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; i < arr.length; i++)
            if (arr[i] + arr[j] === 0)
                return [arr[i], arr[j]];
};

const sumZero2 = (arr) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (!sum)
            return [arr[left], arr[right]];
        else if (sum > 0)
            right--;
        else
            left++;
    }
};
