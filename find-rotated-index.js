/* 
Write a function called ***findRotatedIndex*** which accepts a rotated array of sorted numbers and an integer. 
The function should return the index of num in the array. If the value is not found, return -1.

**Constraints**:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

*/

// function findRotatedIndex(arr, val) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (arr[midIndex] === val) {
//             return midIndex;
//         } else if (arr[leftIndex] === val) {
//             return leftIndex;
//         } else if (arr[rightIndex] === val) {
//             return rightIndex;
//         } else if (arr[midIndex - 1] === val) {
//             return midIndex - 1;
//         } else if (arr[midIndex] > val) {
//             if (arr[midIndex - 1] > arr[midIndex] && arr[midIndex - 1] > val) {
//                 rightIndex = midIndex - 1;
//             } else if (
//                 arr[midIndex - 1] < arr[midIndex] &&
//                 arr[midIndex - 1] !== val &&
//                 (arr[midIndex - 1] < val || arr[midIndex - 1] > val)
//             ) {
//                 leftIndex = midIndex + 1;
//             }
//         } else if (arr[midIndex] < val) {
//             leftIndex = midIndex + 1;
//         }
//     }
//     return -1;
// }

function findRotatedIndex(arr, val) {
    let splitIndex = findSplitPoint(arr);
    if (val === arr[splitIndex]) return splitIndex;
    if (splitIndex > 0 && val >= arr[0] && val <= arr[splitIndex - 1]) {
        return binarySearch(arr, val, 0, splitIndex - 1);
    } else {
        return binarySearch(arr, val, splitIndex, arr.length - 1);
    }
}

// Binery search from the video
function binarySearch(arr, val, leftIndex, rightIndex) {
    if (arr.length === 0) return -1;
    if (val < arr[leftIndex] || val > arr[rightIndex]) return -1;

    while (leftIndex <= rightIndex) {
        var midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[midIndex] === val) {
            return midIndex;
        } else if (val < arr[midIndex]) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}

//Source : SB solution
function findSplitPoint(arr) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    if (lastIndex === 0 || arr[0] < arr[arr.length - 1]) return 0;
    while (firstIndex <= lastIndex) {
        let midIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (arr[midIndex] > arr[midIndex + 1]) {
            return midIndex + 1;
        } else if (arr[leftIndex] <= arr[midIndex]) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }
}

// let result = findSplitPoint([6, 7, 8, 9, 1, 2, 3, 4]);

// let result = findRotatedIndex([3, 4, 1, 2], 4); // 1
let result = findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
// let result = findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
// let result = findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
// let result = findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1

console.log(result);

// module.exports = findRotatedIndex;
