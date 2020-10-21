const merge = (arr1, arr2) => {
	const result = [];
	let p1 = 0, p2 = 0;

	for (let i = 0; i < arr1.length + arr2.length; i++) {
		if (p1 === arr1.length) {
			result.push(...arr2.slice(p2));
			break;
		}
		if (p2 === arr2.length) {
			result.push(...arr1.slice(p1));
			break;
		}
		if (arr1[p1] < arr2[p2]) {
			result.push(arr1[p1]);
			p1++;
		} else {
			result.push(arr2[p2]);
			p2++;
		}
	}

	return result;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let pos = Math.floor(arr.length / 2);
	let arr1 = mergeSort(arr.slice(0, pos));
	let arr2 = mergeSort(arr.slice(pos));
	return merge(arr1, arr2);
};

console.log(mergeSort([12, 24, 76, 73, 72, 1, 9]));
