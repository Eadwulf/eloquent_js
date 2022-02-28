function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(1, 4, 8, 3, 9));

let numbers = [5, 1, 7];
console.log(...numbers); // logs 5 1 7

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
