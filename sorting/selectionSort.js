// function selectionSort(arr) {
//     for (i = 0; i < arr.length - 1; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// const arr = [34, 89, 10, -65, 0, 39]
// selectionSort(arr)
// console.log(arr);

// function selectionSort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length+1;j++){
//             if(arr[i]>arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// const arr = [34,86,20,19,23]
// selectionSort(arr)
// console.log(arr);

function selectionSort(a){
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]<a[j]){
                temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
}

let a = [45,35,12,90,98]
selectionSort(a)
console.log(a);