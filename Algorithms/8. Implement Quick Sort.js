
/*
Quick Sort

Here we will move on to an intermediate sorting algorithm: quick sort. 
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. 

In this method, a pivot value is chosen in the original array. 
The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. 
This continues until the base case of an empty or single-item array is reached, which we return. 
The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. 
It is also relatively easy to implement. 
These attributes make it a popular and useful sorting method.
*/
function quickSort(array) {

    const getSubArray = (arr) => {

        let pivot = Math.floor(arr.length / 2)
        let smallest = []
        let biggest = []

        for (let i = 0; i < arr.length; i++) {
            if (i !== pivot && arr[i] <= arr[pivot]) smallest.push(arr[i])
            if (i !== pivot && arr[i] > arr[pivot]) biggest.push(arr[i])
        }

        return [smallest, arr[pivot], biggest]

    }

    const main = (arr) => {

        if (arr.length < 1) return []

        let [smallest, pivot, biggest] = getSubArray(arr)

        return [].concat(main(smallest), pivot, main(biggest))

    }

    return main(array);

}

// console.log(quickSort([9, 7, 6, 4, 1])); // return [ 1, 4, 6, 7, 9 ]

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
// return [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
