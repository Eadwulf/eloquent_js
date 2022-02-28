SCRIPTS = require('./scripts');

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null) || chacterCount(biggest) < chacterCount(script) {
      biggest = script;
    }
}
console.log(biggest);
