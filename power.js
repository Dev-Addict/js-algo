const power1 = (x, n) => {
    let total = 1;
    for (let i = 0; i < n; i ++)
        total *= x;
    return total;
};

const power2 = (x, n) => {
    if (n === 0) return 1;
    return x * power2(x, n - 1);
};

const power3 = (x, n) => {
    let total = 1;

    const helper = (n) => {
        if (n === 0) return;
        total *= x;
        helper(n - 1);
    };
    helper(n);

    return total;
};

console.log(power1(10, 3));
console.log(power2(10, 3));
console.log(power3(10, 3));
