function loop(value, testFunc, bodyFunc, updateFunc) {
  while (testFunc(value)) {
    bodyFunc(value);
    value = updateFunc(value);
  }
}

loop(
  0,
  n => `${2 ** n}`.length < 6,
  n => console.log(`2^${n}:\t ${2 ** n}`),
  n => n += 1
);
