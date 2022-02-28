function countChar(string, ch) {
	let strLength = string.length;
	let freq = 0;
	let count=0;

	for (count; count < strLength; count++) {
		if (string[count] === ch) {
			freq++;
		}
	}
	return freq;
}

console.log(countChar('Hola Hola', 'H'));

// Note: == operator doen't work in a for loop parameters.
// eg. for (count, count == 10, count++) {
// 			this will never be reached. Why?
// 	   }
