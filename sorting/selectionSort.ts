const inputArrS = [5, 3, 10, 7, 1, 6, 9, 4, 8, 2];

/**
 * Return sorted new array. Using extra space for stability.
 * Space: O(n)
 */
const textBookEasyToRead = () => {
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

    const selectionSort = (arr: Array<number>) => {
        const sortedArr: Array<number> = [];
        let i = 0,
            j = arr.length;
        for (; i < j; i++) {
            const idx = findSmallest(arr);
            sortedArr.push(arr.splice(idx, 1)[0]);
        }
        return sortedArr;
    };

    console.log(selectionSort(inputArrS));
};

/**
 * Sort array in place.
 * Space: O(1)
 */
const sortInPlace = () => {
    const selectionSort = (arr: Array<number>) => {
        for (let i = 0; i < arr.length; i++) {
            let s = i;
            for (let j = s + 1; j < arr.length; j++) {
                if (arr[j] < arr[s]) s = j;
            }
            const temp = arr[i];
            arr[i] = arr[s];
            arr[s] = temp;
        }
    };
    selectionSort(inputArrS);
    console.log(inputArrS);
};
