const factorial1 = num => {
    let total = 1;
    for (let i = 2; i <= num; i ++)
        total *= i;
    return total;
};

const factorial2 = num => {
    if (num === 2) return num;
    return num * factorial2(num - 1);
};

console.log(factorial1(5));
console.log(factorial2(5));
