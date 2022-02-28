SCRIPTS = require('./scripts.js');

function average_with_loop(array) {
  let total = 0, count = 0;
  for (let script of array) {
    if (script.living) {
      total += script.year;
      count += 1;
    }
  }
  return Math.round(total / count);
}
console.log(average_with_loop(SCRIPTS));

function average(array) {
  return array.reduce(
    (a, b) => a + b) / array.length;
}

console.log(Math.round(
  average(SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log(Math.round(
  average(SCRIPTS.filter(s => !s.living).map(s => s.year))));
