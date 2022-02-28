// Arrow functions do not bind their own this but can see
// the this binding of the scope around them. Thus,
// you can do something like:

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});

// If written the argument to map, using the function keyword,
// the code wouldn't work.
