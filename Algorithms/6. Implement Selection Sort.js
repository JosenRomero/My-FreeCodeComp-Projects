
/*
Selection sort

Here we will implement selection sort. 
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
It then starts at the second position, 
selects the smallest value in the remaining list, and swaps it with the second element. 
It continues iterating through the list and swapping elements until it reaches the end of the list. 
Now the list is sorted. 

Selection sort has quadratic time complexity in all cases.

*/
function selectionSort(array) {

    const swap = (arr, number, i, initial) => {
        let zero = arr[initial]
        arr.splice(initial, 1, number)
        arr.splice(i, 1, zero)
        return arr
    }

    const mySort = (arr, itemsCompared) => {
        // selecting the minimum value in a list
        let smallest = [arr[itemsCompared], itemsCompared]; // [number, index]
        for (let i = itemsCompared; i < arr.length; i++) {
            if (arr[i] < smallest[0]) smallest = [arr[i], i]
        }
        // the minimum value swapping it with the first value in the list
        arr = swap(arr, smallest[0], smallest[1], itemsCompared)
        itemsCompared++
        return (arr.length === itemsCompared) ? arr : mySort(arr, itemsCompared)
    }

    return mySort(array, 0);

}

console.log(selectionSort([9, 7, 6, 4, 1])); // return [ 1, 4, 6, 7, 9 ]
