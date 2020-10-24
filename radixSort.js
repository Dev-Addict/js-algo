const getDigit = (num, index) => +num.toString()[num.toString().length - index - 1] | 0;

const digitCount = num => Math.abs(num).toString().length;

const mostDigits = arr => {
    let maxDigits = digitCount(arr[0]);

    for (let i = 1; i < arr.length; i++)
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));

    return maxDigits;
};

const radixSort = nums => {
    const maxDigitCount = mostDigits(nums);

    for (let i = 0; i < maxDigitCount; i++) {
        const digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < nums.length; j++)
            digitBuckets[getDigit(nums[j], i)].push(nums[j]);
        nums = [].concat(...digitBuckets);
    }

    return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9853]));
