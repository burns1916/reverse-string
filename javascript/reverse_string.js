function reverseString(str) {
  // type your code here
  return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// And a written explanation of your solution
