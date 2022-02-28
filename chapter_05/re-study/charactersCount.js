let SCRIPTS = require('../scripts.js');


function charactersCount(scripts) {
  return scripts.ranges.reduce( (count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return charactersCount(a) < charactersCount(b) ? b : a;
}));
