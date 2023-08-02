/* ## **countZeroes**

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called ***countZeroes***, 
which returns the number of zeroes in the array.

**Constraints**:

Time Complexity: O(log N)

Examples: 

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
countZeroes([1,1,1,1,1,1,0,0,0,0,0]) // length = 11, midIndex = 5, answer = 5

*/

/**
 *countZeroes to count the number of zeros in an array
 *devide and conquer
 * @param {Array} arr
 *
 */

function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let midIndex;

    // Exclude arrays contains just ones, and count arrays contains just zeroes
    if (arr[rightIndex] === 1) {
        return 0;
    } else if (arr[leftIndex] === 0) {
        return arr.length - leftIndex;
    }

    // count zeroes other scenarios
    while (leftIndex <= rightIndex) {
        midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[midIndex] === 0) {
            rightIndex = midIndex - 1;
        } else if (arr[midIndex] === 1) {
            leftIndex = midIndex + 1;
        }
    }
    return arr.length - leftIndex;
}
// let result = countZeroes([0, 0, 0]);
// console.log(result);

module.exports = countZeroes;
