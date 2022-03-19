
/*
Binary Search

Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. 
It operates using the following steps:

    1.  Find the middle value of a sorted array. If value == target return (found it!).

    2.  If middle value < target, search right half of array in next compare.

    3.  If middle value > target, search left half of array in next compare.

Write a function binarySearch that implements the binary search algorithm on an array, 
returning the path you took (each middle value comparison) to find the target in an array.

The function takes a sorted array of integers and a target value as input. 
It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. 
The target value should be the last element of the returned array. 
If value not is found, return the string Value Not Found.

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].
*/
function binarySearch(searchList, value, arr) {

    if (searchList.length < 1) return "Value Not Found"

    let arrayPath = (arr) ? arr : []

    let middleIndex = Math.floor((searchList.length - 1) / 2)
    let target = searchList[middleIndex]

    arrayPath.push(target)

    if (target === value) return arrayPath
    else if (value < target) var newArr = searchList.slice(0, middleIndex) // left arr
    else if (value > target) var newArr = searchList.slice(middleIndex + 1) // right arr

    return (newArr) ? binarySearch(newArr, value, arrayPath) : ""

}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];

console.log(binarySearch(testArray, 11)); // return [ 13, 5, 10, 11 ]
