function squared(num) {
    return num * num;
} // Returns the squared value of the input number

function cubed(num) {
    return num * num * num;
} // Returns the cubed value of the input number

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
return num;
} // Returns the factorial value of the input value

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "You need to enter a number!";
    } else {
        para.textContent = `${num} squared is ${squared(num)}. `;
        para.textContent += `${num} cubed is ${cubed(num)}. `;
        para.textContent += `${num} factorial is ${factorial(num)}. `;
        para.textContent += `${num} square root is ${squareRoot(num)}. `
    }
}); // Creates a visual output showing the returned values in a simple manner.

// Here are some explanations for the addEventListener function in step 3 above:
    // By adding a listener to the change event, this function runs whenever te change event
    // fires on the text input - that is when a new value is entered into the text input,
    // and submitted (e.g., enter a value, then un-focus the input by pressing Tab or Return).
    // When this anonymous function runs, the value is the input stored in the num constant.

    // The if statement prints an error message if the entered value is not a number.
    // The condition checks if the expression isNaN(num) returns true. The isNan() function
    // tests whether the num values is not a number - if so, it returns true, and if not,
    // it returns false.

    // If the condition returns false, the num values is a number and the function prints 
    // out a sentence inside the paragraph element that states the square, cube and factorial
    // values of the number. The sentence calls the squared(), cubed(), and factorial()
    // functions to calculate the required values.


