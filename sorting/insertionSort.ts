const inputArrI = [5, 3, 10, 7, 1, 6, 9, 4, 8, 2];

const insertionSort = (arr: Array<number>) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
};

insertionSort(inputArrI);
console.log(inputArrI);
