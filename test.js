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

function findRotatedIndex(arr, val) {
    var splitIndex = findsplitIndex(arr);
    if (splitIndex > 0 && val >= arr[0] && val <= arr[splitIndex - 1]) {
        return binarySearch(arr, val, 0, splitIndex - 1);
    } else {
        return binarySearch(arr, val, splitIndex, arr.length - 1);
    }
}
