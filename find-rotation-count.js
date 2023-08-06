/* 
## **findRotationCount**

Write a function called ***findRotationCount*** which accepts an array of distinct numbers sorted in increasing order. 
The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

**Constraints**:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
*/

// function findRotationCount(arr) {
//     console.log(arr);
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let midIndex;
//     while (leftIndex < rightIndex) {
//         midIndex = Math.floor((leftIndex + rightIndex) / 2);
//         // if (midIndex === leftIndex || midIndex === rightIndex) {
//         //     return rightIndex - leftIndex;
//         // }
//         console.log('midIndex ' + midIndex);
//         if (arr[midIndex] < arr[midIndex + 1]) {
//             rightIndex = midIndex;
//             console.log('rightIndex ' + rightIndex);
//         } else if (arr[midIndex] > arr[midIndex + 1]) {
//             leftIndex = midIndex;
//             console.log('leftIndex ' + leftIndex);
//         }
//     }
//     return midIndex;
// }

function findRotationCount(arr, leftIndex = 0, rightIndex = arr.length - 1) {
    console.log(arr);
    let midIndex;
    if (leftIndex > rightIndex) return leftIndex;
    while (leftIndex < rightIndex) {
        //leftIndex < rightIndex
        if (leftIndex === rightIndex) return leftIndex;

        midIndex = Math.floor((leftIndex + rightIndex) / 2);

        console.log('midIndex ' + midIndex);
        console.log('leftIndex ' + leftIndex);
        console.log('rightIndex ' + rightIndex);

        if (arr[midIndex + 1] < arr[midIndex]) return midIndex + 1;

        if (
            arr[leftIndex] <= arr[rightIndex] &&
            arr[leftIndex] <= arr[midIndex]
        ) {
            rightIndex = midIndex;
            console.log('new rightIndex ' + rightIndex);
        } else {
            leftIndex = midIndex;
        }
    }
    return midIndex;
}

// let result = findRotationCount([15, 18, 2, 3, s6, 12]); // 2
// let result = findRotationCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]); // 0
// let result = findRotationCount([7, 9, 11, 12, 5]); // 4
let result = findRotationCount([7, 9, 11, 12, 15]); // 0

console.log(result);

// module.exports = findRotationCount
