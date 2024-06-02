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

function insertionSort(a){
    for(i=0;i<a.length;i++){
        insert = a[i]
        j = i-1
        while(j>=0 && a[j]>insert){
            a[j+1] = a[j]
            j = j-1
        }
        a[j+1]= insert
    }
}

let a = [56,74,20,10,34]
insertionSort(a)
console.log(a);