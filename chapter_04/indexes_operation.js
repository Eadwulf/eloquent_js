let anArray = [0, 2, 1, 4, 3, 2];

// Search foreward -->>
console.log(anArray.indexOf(2, 2));

// Search backwards <<--
console.log(anArray.lastIndexOf(2));

// Slice method
console.log(anArray.slice(2, 4)); // logs [1, 4]
console.log(anArray.slice(2));    // logs [1, 4, 3, 2]


// Concat method
function remove(array, index) {
  return array.slice(0, index).
    concat(array.slice(index + 1));
}
console.log(remove(anArray, 1)); // logs [0, 1, 4, 3, 2]
