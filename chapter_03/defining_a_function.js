const square = function(x) {
	return x * x;
}
console.log(square(2));

const power = function(base, exponent) {
	let result = base;
	for (let count = 1; count < exponent; count++) {
		result *= base;
	}
	return result;
}
console.log(power(2, 10));
