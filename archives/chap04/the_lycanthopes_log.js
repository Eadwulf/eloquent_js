let journal = [];

function addEntry(events, squirrel) {
  dataObject = {events, squirrel};
  journal.push(dataObject);
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"],
          true);

console.log(journal);
