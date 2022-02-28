let SCRIPTS = require('../scripts');

function characterScript(SCRIPTS, code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
        return script;
      }
  }
  return null;
}

console.log(countCharacters(characterScript(SCRIPTS, 121)));
