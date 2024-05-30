function selectionSort(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const arr = [34, 89, 10, -65, 0, 39]
console.log(selectionSort(arr));