let theNumber = Number(prompt("Pick a number"));

if (!theNumber.isNaN(theNumber)) {
	console.log("Yor number is the square root of" + theNumber * theNumber);
}
else {
	console.log("You didn't entered a valid value");
}

