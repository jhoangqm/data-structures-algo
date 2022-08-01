function execute(program) {
	// initialize the stack
	const stack = [];
	for (const instruction of program) {
		if (instruction == "peek") {
			// print out the top item in stack
			console.log(stack[stack.length - 1]);
		} else if (instruction == "pop") {
			// pop the top item in stack
			stack.pop();
		} else {
			// get the data in the "push" instruction
			const data = parseInt(instruction.substring(5));
			// push data to the top of stack
			stack.push(data);
		}
	}
	return stack;
}
