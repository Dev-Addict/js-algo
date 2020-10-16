const nativeStringSearch = (str, subStr) => {
    let pos = 0,
        matched = 0;

    while (str.length - 1 >= pos + subStr.length - 1 - matched && subStr.length  !== matched) {
        if (str[pos] === subStr[matched])
            matched += 1;
        else
            matched = 0;
        pos += 1;
    }

    if (subStr.length === matched)
        return pos - matched;
    return -1;
};

console.log(nativeStringSearch('hdsjflkshsdfhhdjfvdd', 'shsd'));
