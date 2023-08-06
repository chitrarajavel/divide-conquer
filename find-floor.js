/* 
## **findFloor**

Write a function called ***findFloor*** which accepts a sorted array and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1

*/

function findFloor(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let midIndex;
    if (arr[leftIndex] > num) return -1;

    while (leftIndex <= rightIndex) {
        midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[midIndex] === num) return arr[midIndex];
        if (arr[midIndex] < num) {
            leftIndex = midIndex + 1;
            console.log('right Index ' + rightIndex);
        } else {
            rightIndex = midIndex - 1;
            console.log('leftIndex ' + leftIndex);
        }
    }
    return arr[midIndex];
}

// let result = findFloor([1, 2, 8, 10, 10, 12, 19], 9); // 8
// let result = findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
// let result = findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1

console.log(result);

// module.exports = findFloor;
