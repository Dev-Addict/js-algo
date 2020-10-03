const maxSubArraySum1 = (arr, n) => {
    let max = 0;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++)
            temp += arr[i + j];
        if (temp > max)
            max = temp;
    }
    return max;
};

const maxSubArraySum2 = (arr, n) => {
    let max = 0, temp;
    for (let i = 0; i < n; i++)
        max += arr[i];
    temp = max;
    for (let i = n; i < arr.length; i++) {
        temp -= arr[i - n] - arr[i];
        max = Math.max(temp, max);
    }
    return max;
};

console.log(maxSubArraySum1([1,2,5,2,8,1,5], 4));
console.log(maxSubArraySum2([1,2,5,2,8,1,5], 4));
