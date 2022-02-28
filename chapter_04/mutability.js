let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value)


// Constant objects

const score = {visitors: 0, home: 0};
// this is ok
score.visitors = 10;
// this is not allowed
score = {visitors: 10, home:0}

