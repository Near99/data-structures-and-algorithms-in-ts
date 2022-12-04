const inputArrB = [5, 3, 10, 7, 1, 6, 9, 4, 8, 2];

const bubbleSort = (arr: Array<number>) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

/**
 * Slightly better than no flag but still sucks.
 */
const bubbleSortWithFlag = (arr: Array<number>) => {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - counter - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
};

bubbleSortWithFlag(inputArrB);
console.log(inputArrB);
