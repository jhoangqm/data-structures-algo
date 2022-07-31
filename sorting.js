// creating the sort method with vanilla javascript
function sortList(unsortedList) {
    for (let i = 0; i < unsortedList.length; i++) {
        let current = i;
        while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
            const temp = unsortedList[current];
            unsortedList[current] = unsortedList[current - 1];
            unsortedList[current - 1] = temp;
            current--;
        }
    }
    return unsortedList;
}

// sort method implemented in JavaScript
function sortListFunction(unsortedList) {
    return unsortedList.sort(( a , b ) => a - b)
}

//  find the smallest item from the unsorted pile and add it to the sorted pile.
function sortListSelection(unsortedList) {
    const n = unsortedList.length;
    for (var i = 0; i < n; i++) {
        let minIndex = i;
        for (var j = i; j < n; j++) {
            if (unsortedList[j] < unsortedList[minIndex]) {
                minIndex = j;
            }
        }
        const temp = unsortedList[i];
        unsortedList[i] = unsortedList[minIndex];
        unsortedList[minIndex] = temp;
    }
    return unsortedList;
}

console.log(sortList([1,6,2,3,7,10]))
console.log(sortListFunction([1,5,2,3,7,10]))
console.log(sortListSelection([1,5,2,3,7,10]))
