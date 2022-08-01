function getCounter(arr) {
	// initialize a hash map to store each number and its count
	const counter = new Map();
	for (const num of arr) {
		// check if num is a key in the hash map
		if (counter.has(num)) {
			// update the count of num to increase by 1
			counter.set(num, counter.get(num) + 1);
		} else {
			// set the count of num to 1
			counter.set(num, 1);
		}
	}
	return counter;
}

getCounter([3, 4, 2, 1, 4, 4, 3]);
console.log(getCounter([3, 4, 2, 1, 4, 4, 3]));

// OUTPUT
// Map(4) {
//   3 => 2,
//   4 => 3,
//   2 => 1,
//   1 => 1
// }
