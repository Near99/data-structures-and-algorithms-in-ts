const inputArr = [5, 3, 10, 7, 1, 6, 9, 4, 8, 2];

const findSmallest = (arr: Array<number>) => {
    let idx = 0,
        smallest = arr[0];
    arr.forEach((number, index) => {
        if (number < smallest) {
            (smallest = number), (idx = index);
        }
    });
    return idx;
};

const selectionSrot = (arr: Array<number>) => {
    const sortedArr: Array<number> = [];
    let i = 0,
        j = arr.length;
    for (; i < j; i++) {
        const idx = findSmallest(arr);
        sortedArr.push(arr.splice(idx, 1)[0]);
    }
    return sortedArr;
};

console.log(selectionSrot(inputArr));
