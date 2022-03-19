
function sym(...args) {

    const findTheSymmetricDifference = (t, v) => {

        let arrDelete = []

        let result = v.reduce((t2, v2) => {
            if (!t.includes(v2) && !t2.includes(v2) && !arrDelete.includes(v2)) t2.push(v2)
            else if (t.includes(v2)) arrDelete.push(v2), t.splice(t.indexOf(v2), 1)
            return t2
        }, [])

        t.push(...result)

        return t

    }

    const twoArr = (...arr) => arr.reduce((t, v) => findTheSymmetricDifference(t, v), [])

    return args.reduce((t, v, i, arr) => (i === 1) ? t = twoArr(arr[0], arr[1]) : (i >= 2) ? t = twoArr(t, v) : t = "", "")


}

// console.log(sym([1, 2, 3], [5, 2, 1, 4])); // return [ 3, 5, 4 ]

// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // return [ 3, 5, 4 ]

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // return [1, 4, 5]
