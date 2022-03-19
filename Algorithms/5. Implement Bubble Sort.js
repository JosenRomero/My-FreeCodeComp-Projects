
/*
bubble sort

Starting from the beginning of the list, compare every adjacent pair, 
swap their position if they are not in the right order (the latter one is smaller than the former one). 

After each iteration, 
one less element (the last one) is needed to be compared until there are no more elements left to be compared.

*/
function bubbleSort(array) {

	const swap = (arr, i) => {
	    let i1 = arr[i]
	    let i2 = arr[i+1]
	    arr.splice(i, 2)
	    arr.splice(i, 0, i2, i1)
	    return arr
  	}

  	const mySort = (arr, itemsCompared) => {
	    for(let i = 0; i < arr.length-itemsCompared; i++) {
	    	if(arr[i+1] !== undefined && arr[i] > arr[i+1]) arr = swap(arr, i)
	    }
	    itemsCompared++; // After each iteration, one less element (the last one) is needed to be compared
	    return (arr.length+1 === itemsCompared) ? arr : mySort(arr, itemsCompared)
  	}

  	return mySort(array, 0);
 
}

// console.log(bubbleSort([9, 7, 6, 4, 1])); // return [ 1, 4, 6, 7, 9 ]

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
// return  [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
