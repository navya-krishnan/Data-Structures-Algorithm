// function bubbleSort(arr){
//     let swapped 
//     do{
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i] < arr[i+1]){
//                 temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }

// const arr = [45,82,19,29,59,20]
// bubbleSort(arr)
// console.log(arr);


// function bubbleSort(a) {
//     for (let i = 0; i < a.length; i++) {
//         let flag = false;
//         for (let j = 0; j < a.length - i - 1; j++) {
//             if (a[j] > a[j + 1]) {
//                 let temp = a[j];
//                 a[j] = a[j + 1];
//                 a[j + 1] = temp;
//                 flag = true;
//             }
//         }
//         if (flag === false) {
//             break;
//         }
//     }
// }

// const a = [67, 29, 10, 39, 46];
// bubbleSort(a);
// console.log(a); 


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
// }

// const arr = [45, 76, 29, 30, 47, 73]
// bubbleSort(arr)
// console.log(arr);


function bubbleSort(a){
    let swapped 
    do{
        swapped = false
        for(i=0;i<a.length;i++){
            if(a[i] > a[i+1]){
                temp = a[i]
                a[i] = a[i+1]
                a[i+1] = temp 
                swapped = true
            }
        }
    }while(swapped)
}

let a = [56,29,20,34,87]
bubbleSort(a)
console.log(a);