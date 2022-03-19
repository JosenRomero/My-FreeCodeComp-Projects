
/*
Insertion Sort

This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 

This algorithm has quadratic time complexity in the average and worst cases.

*/
function insertionSort(array) {

    const insertion = (item, newArr) => {
        for (let i = newArr.length - 1; i >= 0; i--) {
            if (item > newArr[i]) {
                (i === newArr.length - 1) ? newArr.push(item) : newArr.splice(i + 1, 0, item)
                break;
            } else if (item < newArr[i] && i === 0 || item === newArr[i] && i === 0) newArr.splice(i, 0, item)
        }
        return newArr
    }

    const main = (arr, newArr) => {
        let item = arr.splice(0, 1)
        newArr = (newArr.length === 0) ? item : insertion(item[0], newArr)
        return (arr.length !== 0) ? main(arr, newArr) : newArr
    }

    return main(array, []);

}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
// return [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
