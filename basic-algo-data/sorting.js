// For each n item in the list, the time complexity to insert it into the sorted list is O(i),
// where i is the index of that item. Overall, the time complexity is **O(n * (n - 1) / 2)**, 
// which is equivalent to **O(n^2)**

// creating the sort method with vanilla javascript
function sortListInsertion(unsortedList) {
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

// quick sort method implemented in JavaScript
function sortListFunction(unsortedList) {
    return unsortedList.sort(( a , b ) => a - b)
}

/*For each n item in the list,
the time complexity to find the smallest item in the unsorted pile is O(n - i), 
where i is the index of that item. 
Overall, the time complexity is **O(n * (n + 1) / 2)**, which is equivalent to **O(n^2)**.
 */
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

// The time complexity of this algorithm, like before, is **O(n^2)**, because it is essentially two loops.
// for each pass, we use a pointer to point at the first element of the list. For each cycle, we compare it to the next element in the list and swap them if the current item is greater, then move the pointer by one until it reaches the end of the list. We repeat this process until the list becomes sorted. The list is sorted if, during a pass, no swapping occurs.
function sortListBubble(unsortedList) {
    const n = unsortedList.length;
    for (var i = n - 1; i >= 0; i--) {
        let swapped = false;
        for (var j = 0; j < i; j++) {
            if (unsortedList[j] > unsortedList[j + 1]) {
                const temp = unsortedList[j];
                unsortedList[j] = unsortedList[j + 1];
                unsortedList[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) return unsortedList;
    }
    return unsortedList;
}

console.log(sortListInsertion([1,6,2,3,7,10]))
console.log(sortListFunction([1,5,2,3,7,10]))
console.log(sortListSelection([1,5,2,3,7,10]))
console.log(sortListBubble([1,5,2,3,7,10]))
