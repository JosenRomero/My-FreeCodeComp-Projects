
/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
*/
function updateInventory(...arr) {

    const sortItems = (a, b) => (a[1] > b[1]) ? 1 : (a[1] < b[1]) ? -1 : 0

    const sumItem = (arr, currentItem) => arr.map((item, i) => (item[1] === currentItem[1])
        ? item[0] += currentItem[0] : item[0])

    const checkSavedItems = (arr, currentItem) => arr.some((item, i) => item[1] === currentItem[1])

    return arr.reduce((totalItems, items) => {

        let itemsT = items.reduce((itemsTemp, currentItem) => {
            if (checkSavedItems(totalItems, currentItem)) sumItem(totalItems, currentItem)
            else itemsTemp.push(currentItem)
            return itemsTemp
        }, [])

        totalItems.push(...itemsT)

        return totalItems

    }, []).sort(sortItems);
}

console.log(
    updateInventory(
        [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ],
        [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
        ]
    ));
/* return [
    [88, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [3, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [5, "Microphone"], 
    [7, "Toothpaste"]
]*/
