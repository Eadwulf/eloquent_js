function range(start, end, steps=1) {
  let output = [];

  if (steps < 0) {
    for (let n = end; n >= start; n += steps) {
      console.log(n);
      output.push(n);
      }
  }
  else {
    for (let n = start; n <= end; n += steps) {
      output.push(n);
    }
  }
  return output;
}

function sum(array) {
  let output = 0;
  for (let n of array) {
    output += n;
  }
  return output;
}

console.log(sum(range(10, 15, 1)));
