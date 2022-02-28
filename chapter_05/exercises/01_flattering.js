function flatten(array) {
  return array.reduce(
    (a, b) => a.concat(b)
  );
}

console.log(flatten([[0, 2], [4, 6], [8, 10]]));
