const inputArrM = [5, 3, 10, 7, 1, 6, 9, 4, 8, 2];

const merge_ = (arr: Array<number>, low: number, middle: number, high: number) => {
    let i = 0;
    const bufferOne: Array<number> = [],
        bufferTwo: Array<number> = [];
    for (i = low; i <= middle; i++) bufferOne.push(arr[i]);
    for (i = middle + 1; i <= high; i++) bufferTwo.push(arr[i]);
    let bufferOneIndex = 0,
        bufferTwoIndex = 0;
    i = low;
    while (bufferOneIndex < bufferOne.length && bufferTwoIndex < bufferTwo.length) {
        if (bufferOne[bufferOneIndex] <= bufferTwo[bufferTwoIndex]) {
            arr[i++] = bufferOne[bufferOneIndex++];
        } else {
            arr[i++] = bufferTwo[bufferTwoIndex++];
        }
    }
    while (bufferOneIndex < bufferOne.length) {
        arr[i++] = bufferOne[bufferOneIndex++];
    }
    while (bufferTwoIndex < bufferTwo.length) {
        arr[i++] = bufferTwo[bufferTwoIndex++];
    }
};

const mergeSort_ = (arr: Array<number>, low: number, high: number) => {
    if (low >= high) return;
    const middle = Math.floor((low + high) / 2);
    mergeSort_(arr, low, middle);
    mergeSort_(arr, middle + 1, high);
    merge_(arr, low, middle, high);
};

const mergeSort = (arr: Array<number>) => {
    mergeSort_(arr, 0, arr.length - 1);
};

mergeSort(inputArrM);
console.log(inputArrM);
