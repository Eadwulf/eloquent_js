function squirrelNotes() {
	let day1 = {
		squirrel: false,
		events: ["work", "touched tree", "eat pizza", "running"]
	};
	day1.wolf = false;
	return day1
}

let objectA = {
	a: 1, b: 2
}


console.log(squirrelNotes().squirrel);
console.log(Object.keys(objectA));

Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

