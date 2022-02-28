// Finding the biggest script without higher-order functions
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || 
    characterCount(biggest) < characterCount(script)) {
      biggest = script;
    }
}
console.log(biggest);
// → {name: "Han", …}


// Higher-order functions start to shine when you need
// to compose operations. As an example, let’s write code
// that finds the average year of origin for living and
// dead scripts in the data set.
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.year))));
// → 1165

console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204



// You can definetly also write this computation as one big loop.
let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (scripts.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1165