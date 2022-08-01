// Time Complexity: **O(log(n))**
//

function binarySearch(arr, target) {
	return binarySearchHelper(arr, target, 0, arr.lenght - 1);
}

function binarySearchHelper(arr, target, left, right) {
	if (left > right) {
		return false;
	}
	let mid = left + Math.floor((right - left) / 2); // use `(right - left) /2` to prevent `left + right` potential overflow
	if (arr[mid] === target) return mid; // found target, return its index
	if (arr[mid] < target) {
		// middle less than target, discard left half by making left search boundary `mid + 1`
		return binarySearchHelper(arr, target, left, mid - 1);
	} else {
		// middle greater than target, discard right half by making right search boundary `mid - 1`
		return binarySearchHelper(arr, target, mid + 1, right);
	}
}
