string = "coconuts";

function question() {
  console.log("are " +
    string[string.indexOf("u")] + " " +
    string.slice(4, 8) + "?");
}


// Returns the position of the first occurrence of a substring.
console.log("one two three".indexOf("ee"));

// Removes the leading and trailing white spaces and line terminator characters from a string.
console.log("   \t okay  \n \t okay ".trim());

// String method convert a value into a string
console.log(String(6));

// padStart pads the current string with a given substring (possibly repeated)
// so that the resulting string reaches a given length.
console.log(String(6).padStart(3, "0")); // logs 006

// Split and Join methods
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". ")); // Doesn't change the variable's value

// Repeat method
console.log("HA".repeat(4));

// Length and accesing string indexes
console.log(sentence.length);
console.log(sentence[19]);
