require('../scripts.js');

function filter(array, test) {
  let passed = [];
  for (element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

//console.log(filter(SCRIPTS, script => script.living));


function filterArray(array) {
  let passed = [];
  for (let element of array) {
    if(element.living) {
      passed.push(element);
    }
  }
  return passed;
}

function extractName(array) {
  let result = [];
  for (let element of array) {
    if (element.name === "Latin" || element.name === "Germanic") {
      result.push(element.name);
    }
  }
  return result;
}
console.log(extractName(filterArray(SCRIPTS)));
