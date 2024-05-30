// function insertionSort(arr) {
//     for (i = 0; i < arr.length; i++) {
//         insert = arr[i]
//         j = i - 1
//         while (j >= 0 && arr[j] > insert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = insert
//     }
// }

// let arr = [7, 9, 11, 12, 3]
// insertionSort(arr)
// console.log(arr);

function insertionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        insert = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > insert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = insert
    }
}

let arr = [34, 28, 35, 10, 0, -56]
insertionSort(arr)
console.log(arr);