// every with a loop
function everyLoop(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

// every with the some method
function every(array, predicate) {
  return !array.some(predicate);
}

console.log('every with a loop');
console.log(everyLoop([1, 2, 3, 4], n => n % 2 == 0));
console.log(everyLoop([2, 4, 6, 8], n => n % 2 == 0));

console.log('\nevery with the some method');
console.log(every([1, 2, 3, 4], n => n % 2 !== 0));
console.log(every([2, 4, 6, 8], n => n % 2 !== 0));
