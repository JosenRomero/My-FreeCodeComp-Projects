
function mergeSort(array) {

    const getMergeArray = (arr1, arr2) => {
        let arrLen = [...arr1, ...arr2].length
        let mergeArr = []
        for (let i = 0; i < arrLen; i++) {
            if (arr1[0] === undefined || arr2[0] === undefined) {
                mergeArr.push(...arr1, ...arr2)
                break;
            }
            if (arr1[0] <= arr2[0]) {
                mergeArr.push(arr1[0])
                arr1.splice(0, 1)
            } else {
                mergeArr.push(arr2[0])
                arr2.splice(0, 1)
            }
        }
        return mergeArr
    }

    const getSubArray = (arr) => {
        let centerIndex = Math.floor(arr.length / 2)
        return [arr.slice(0, centerIndex), arr.slice(centerIndex)]
    }

    const main = (arr) => {

        if (arr.length === 1) return arr

        let [arr1, arr2] = getSubArray(arr)

        let sortedArr1 = main(arr1)
        let sortedArr2 = main(arr2)

        return getMergeArray(sortedArr1, sortedArr2)

    }

    return main(array);

}

// console.log(mergeSort([9, 7, 6, 4, 1])); // return [ 1, 4, 6, 7, 9 ]

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
// return [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]