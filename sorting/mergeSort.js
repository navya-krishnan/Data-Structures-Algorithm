// function mergeSort(arr) {
//     if (arr.length < 2)
//         return arr

//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0, mid)
//     const right = arr.slice(mid)

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//     sortedArray = []
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sortedArray.push(left.shift())
//         } else {
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray, ...left, ...right]
// }


// let arr = [8, 3, 5, 4, 7, 6, 1, 2]
// console.log(mergeSort(arr));


function mergeSort(arr){
    if(arr.length < 2)
        return arr

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    sortedArray = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}


let arr = [67,94,2,10,25,52,10]
console.log(mergeSort(arr));