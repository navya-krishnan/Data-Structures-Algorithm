// function quickSort(arr){
//     if(arr.length<2)
//         return arr

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [5,2,1,8,4,7,6,3]
// console.log(quickSort(arr));


function quickSort(a) {
    if (a.length < 2) return a;

    let pivot = a[a.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let a = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(a));
