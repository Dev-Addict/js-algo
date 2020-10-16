const fib1 = x => {
    x = x - 1;

    let a = 1,
        b = 0;

    for (let i = 0; i < x; i++) {
        let t = b;
        b = a;
        a += t;
    }

    return a;
};

const fib2 = x => {
    if (x <= 1) return x;
    return fib2(x - 1) + fib2(x - 2);
};

console.log(fib1(5));
console.log(fib2(5));
