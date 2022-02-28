function repeatString(string, repeats) {
  substring = string;
  for (let n=2; n < repeats+1; n++) {
    string += "\n" + substring.repeat(n);
  }
  return string;
}
console.log(repeatString("#", 7));
