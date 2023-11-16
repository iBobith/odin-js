// Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — () — and you're not
// using a common built-in language structure like a for loop, while or do...while loop, or if...else statement, 
// you are making use of a function.

// Built-in browser functions
// Manipulating a string:
const myText = "I am a string";
const newString = myText.replace("string", "sausage"); // The word string is replaced with sausage.
console.log(newString);
// The replace() string function takes a source string, in this case "I am a string", and a target string
// and replaces the source string, with the target string, and returns a newly formed string.

// Manipulating an array:
const myArray = ["I", "love", "chocolate"]; // Ilovechocolate
const madeAString = myArray.join(" ");// I love chocolate
console.log(madeAString);
// The join() function takes an array, joins all the array items together into a single string, and returns this new string. 

