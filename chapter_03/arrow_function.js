const power = (base, exponent) => {
	let result = base;
	for (let count=1; count < exponent; count++) {
		result *= base
	}
	return result;
};
console.log(power(2, 10));

/*
When there is only one parameter name, you can omit the parentheses
around the parameter list. If the body is a single expression, rather
than a block in braces, that expression will be returned from the
function. So, these two definitions of square do the same thing: */

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(2)===square2(2)); // logs true
