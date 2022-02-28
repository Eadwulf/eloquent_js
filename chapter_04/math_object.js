function randomPointsOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointsOnCircle(2));


// Math.random and Math.floor
let randomNumber = Math.random() * 10

console.log(Math.floor(randomNumber)); // Math.floor rounds down
console.log(Math.ceil(randomNumber));  // Math.ceil rounds up
console.log(Math.round(randomNumber)); // Math.round rounds to the closest number
