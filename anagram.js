const anagram = (str1, str2) => {
    if (str1.length !== str2.length)
        return false;

    const lookup = {};

    for (let i = 0; i < str1.length; i++)
        lookup[str1[i]] ? lookup[str1[i]] += 1 : lookup[str1[i]] = 1;

    for (let i = 0; i < str2.length; i++)
        if (!lookup[str2[i]])
            return false;
        else
            lookup[str2[i]] -= 1;

    return true;
};
