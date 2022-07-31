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

console.log(sortList([1,6,2,3,7,10]))
console.log(sortListFunction([1,5,2,3,7,10]))
