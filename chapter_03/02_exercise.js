function isEven(n) {
	if (n < 0) {
		return false;
	}
	else if (n === 0) {
		return true;
	}
	else if (n === 1) {
		return false;
	}
	return isEven(n-2);
}


console.log(isEven(22835)); // maximum recursive depth
console.log(isEven(22834));
console.log(isEven(-1));
