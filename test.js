// Binary Search based C++ program to find number
// of rotations in a sorted and rotated array.

// Returns count of rotations for an array which
// is first sorted in ascending order, then rotated
function countRotations(arr, leftIndex, rightIndex) {
    // This condition is needed to handle the case
    // when the array is not rotated at all
    if (rightIndex < leftIndex) return 0;

    // If there is only one element left
    if (rightIndex == leftIndex) return leftIndex;

    // Find midIndex
    let midIndex = Math.floor(
        leftIndex + (rightIndex - leftIndex) / 2
    ); /*(leftIndex + rightIndex)/2;*/

    // Check if element (midIndex+1) is minimum element.
    // Consider the cases like {3, 4, 5, 1, 2}
    if (midIndex < rightIndex && arr[midIndex + 1] < arr[midIndex])
        return midIndex + 1;

    // Check if midIndex itself is minimum element
    if (midIndex > leftIndex && arr[midIndex] < arr[midIndex - 1])
        return midIndex;

    // Decide whether we need to go to left half or
    // right half
    if (arr[rightIndex] > arr[midIndex])
        return countRotations(arr, leftIndex, midIndex - 1);

    return countRotations(arr, midIndex + 1, rightIndex);
}
