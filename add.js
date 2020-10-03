// add with iterating
const add1 = n => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};

// add with formula
const add2 = n => n * (n + 1) / 2;

const add1Start = Date.now();
console.log('using iterator:\t', add1(1000000000));
const add1End = Date.now();

const add2Start = Date.now();
console.log('using formula:\t', add2(1000000000));
const add2End = Date.now();

console.log('using iterator takes:\t', add1End - add1Start);
console.log('using formula takes:\t', add2End - add2Start);
