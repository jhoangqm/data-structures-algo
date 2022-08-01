// Time Complexity: **O(log(n))**
// Space Complexity O(log(n))

let numbers = [1, 3, 6, 7, 9, 10, 15, 20, 27];

function binarySearch(arr, target) {
	return binarySearchHelper(arr, target, 0, arr.length - 1);
}

function binarySearchHelper(arr, target, left, right) {
	if (left > right) {
		return false;
	}

	let mid = Math.floor((left + right) / 2);
	if (arr[mid] === target) {
		return mid; // found target, return its index
	} else if (arr[mid] > target) {
		// middle less than target, discard left half by making left search boundary `mid + 1`
		return binarySearchHelper(arr, target, left, mid - 1);
	} else {
		// middle greater than target, discard right half by making right search boundary `mid - 1`
		return binarySearchHelper(arr, target, mid + 1, right);
	}
}

console.log(binarySearch(numbers, 10)); // => returns 5
console.log(binarySearch(numbers, 40)); // => returns false
