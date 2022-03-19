
/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {

    const arr = str.split("")
    const perms = []

    const swap = (pos1, pos2) => [arr[pos1], [arr[pos2]]] = [arr[pos2], arr[pos1]]

    const addPerms = (n) => {

        if (n === 1) {
            perms.push(arr.join(""))
        } else {
            for (let i = 0; i < n; i++) {
                addPerms(n - 1)
                swap(n % 2 ? 0 : i, n - 1)
            }
        }

    }

    addPerms(arr.length);

    return perms.filter((permutation) => !permutation.match(/(.)\1+/g)).length

}

console.log(permAlone('aab')); // return 2
