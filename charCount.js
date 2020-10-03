const charCount = (string) => {
    const result = {};
    for (let s of string) {
        if (result.hasOwnProperty(s))
            result[s]++;
        else
            result[s] = 1;
    }
    return result;
};

console.log(charCount("Hello my name is Aria"));
