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

bubbleSort(inputArrB);
console.log(inputArrB);
