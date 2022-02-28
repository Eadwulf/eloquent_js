// Filtering arrays
SCRIPTS = require('./scripts.js');

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, script => script.living));

// The built-in method filter
//console.log(SCRIPTS.filter(s => s.direction == 'ttb'));
