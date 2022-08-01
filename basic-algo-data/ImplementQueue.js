function execute(program) {
	// initialize the queue
	const queue = [];
	for (const instruction of program) {
		if (instruction == "peek") {
			if (queue.length === 0) {
				// print warning message if queue is empty
				console.log("Queue is empty!");
			} else {
				// print out the first item in queue
				console.log(queue[0]);
			}
		} else if (instruction == "pop") {
			if (queue.length === 0) {
				// print warning message if queue is empty
				console.log("Queue is empty!");
			} else {
				// pop the first item in queue
				queue.shift();
			}
		} else {
			// get the data in the "push" instruction
			const data = parseInt(instruction.substring(5));
			// push data to the end of queue
			queue.push(data);
		}
	}
	return queue;
}
