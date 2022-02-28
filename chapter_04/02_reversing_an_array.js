function reverseArray(array) {
  output = [];
  for (let i=1; i <= array.length; i++) {
    output.push(array[array.length - i]);
  }
  return output;
}

function deepCopy(array) {
  output = [];
  for (let i of array) {
    output.push(i);
  }
  return output;
}

function reverseInPlace(array) {
  let tempArray = deepCopy(array);
  for (let i = 1; i <= array.length; i++) {
    array[array.length - i] = tempArray[i - 1];
  }
  return array;
}
console.log(reverseInPlace([1, 2, 3, 4]));
