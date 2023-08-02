/* 

## **sortedFrequency**

Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array

**Constraints**:

Time Complexity: O(log N)

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

*/

function sortedFrequency(arr, val) {
    let f = firstIndex(arr, val);
    let l = lastIndex(arr, val);
    return f === -1 ? -1 : l - f + 1;
}

function firstIndex(arr, val) {
    let firstIndex = 0;
    let lastIndex = arr.length;
    while (arr[firstIndex] !== val && firstIndex <= lastIndex) {
        let midIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (arr[midIndex] === val && arr[midIndex - 1] !== val) {
            return midIndex;
        } else if (arr[midIndex] === val && arr[midIndex - 1] === val) {
            firstIndex = midIndex - 1;
            if (arr[firstIndex - 1] === val) {
                firstIndex = firstIndex - 1;
            }
        } else if (arr[midIndex] > val) {
            lastIndex = midIndex - 1;
        } else if (arr[midIndex] < val) {
            firstIndex = midIndex + 1;
        } else {
            return -1;
        }
    }
    return firstIndex;
}

function lastIndex(arr, val) {
    let firstIndex = 0;
    let lastIndex = arr.length;
    while (arr[lastIndex] !== val && firstIndex <= lastIndex) {
        let midIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (arr[midIndex] === val && arr[midIndex + 1] !== val) {
            return midIndex;
        } else if (arr[midIndex] === val && arr[midIndex + 1] === val) {
            lastIndex = midIndex + 1;
            if (arr[lastIndex + 1] === val) {
                lastIndex = lastIndex + 1;
            }
        } else if (arr[midIndex] > val) {
            lastIndex = midIndex - 1;
        } else if (arr[midIndex] < val) {
            firstIndex = midIndex + 1;
        } else {
            return -1;
        }
    }
    return lastIndex;
}

let result = sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4);
console.log(result);

// module.exports = sortedFrequency;
