/*
// JSON data structure
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
*/


// JSON.stringify
let string = JSON.stringify({squirrel: false, events: ["weekend"]});

console.log(string); // → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events); // → ['weekend']
