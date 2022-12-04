const inputArrH = [5, 3, 10, 7, 1, 6, 9, 4, 8, 2];

const heapify = (arr: Array<number>, index: number, size: number) => {
    let max = index;
    for (let i = 1; i <= 2; i++) {
        let child = index * 2 + i;
        if (child < size) {
            if (arr[max] < arr[child]) max = child;
        }
    }
    if (max !== index) {
        let temp = arr[max];
        arr[max] = arr[index];
        arr[index] = temp;
        heapify(arr, max, size);
    }
};

const heapSort = (arr: Array<number>) => {
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, 0, i);
    }
};

heapSort(inputArrH);
console.log(inputArrH);
