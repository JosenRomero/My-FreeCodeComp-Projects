
/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. 
Each pair should use the lowest possible available indices. 
Once an element has been used it cannot be reused to pair with another element. 
For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
The pairs that sum to 20 are [7, 13] and [9, 11]. 
We can then write out the array with their indices and values.

    index	0	1	2	3	4
    Value 	7	9	11	13	15

    Below we'll take their corresponding indices and add them.

    7 + 13 = 20 → Indices 0 + 3 = 3
    9 + 11 = 20 → Indices 1 + 2 = 3
    3 + 3 = 6 	→ Return 6

*/

function pairwise(arr, arg) {

    // return [currentIndex, anotherIndex]
    const compareNumbers = (t1, array, currentIndex, currentValue, value) => array.reduce((t2, v, i) => {
        if (v + currentValue === value && i !== currentIndex
            && !t2.includes(currentIndex) && !t2.includes(i)
            && !t1.includes(currentIndex) && !t1.includes(i)) t2.push(...[currentIndex, i])
        return t2
    }, [])

    const addIndices = (array) => array.reduce((t, v, i, array) => {
        let newArr = compareNumbers(t, array, i, v, arg)
        if (newArr.length > 0) t.push(...newArr)
        return t
    }, []);

    const sumIndices = (array) => array.reduce((t, v, i) => t += v, 0)

    const arrIndex = addIndices(arr)

    return sumIndices(arrIndex)

}

// console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // return 11

// console.log(pairwise([1, 1, 1], 2)); // return 1

console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // return 10
