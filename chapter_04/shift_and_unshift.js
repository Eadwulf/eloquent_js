let todoList = [];

function remember(task) {
	let todoListLength = todoList.length;
	todoList.push(task);
	if (todoListLength === todoList.length - 1) {
		return ('task "' + task + '" added.')
	}
}

function getTask(task, start=false) {
	if (start === false) {
		return todoList.pop(task);
	}
	return todoList.shift(task);
}

function rememberUrgentTask(task) {
	return todoList.unshift(task);
}


// Add a task to the end of the array
remember("running");
remember("climbing");
console.log(todoList);

// Remove (returning) the first task in the array
getTask("running", start=true);
console.log(todoList);

// Add a task to the first position of the array
rememberUrgentTask("cycling");
rememberUrgentTask("trail running");
console.log(todoList);
