//Conditional Branching
    //we can use the IF statement and the conditional operator ?.
    
    //The IF statement
    //The if(...) statement evaluates a condition in parentheses and, if the result is true,
    //executes a block of code.
    //Example:
    let year = prompt("In which year was EMAScript-2015 specification published?")
    if (year == 2015) {
    alert("Yes, you are right!");
    }

//Boolean Conversation
    //The if(...) statement evaluates the expression in its parentheses and converts the
    //result to a boolean.

        //-A number 0, and empty string "", null. undefined, and NaN all become false.
        //  Thats because they're falsy values.
        //-Other values become true, so they are called truthy.
    
    //So the code under this condition would never execute:
    if (0) {
        alert("Hello!");
    }
    //0 is falsy
    //On the other hand, this condition would always execute:
    if (1) {
        alert("Hi!");
    }
    //1 is truthy
    //You can also pass a pre-evaluated boolean value to if, like this:
    let cond = (year == 2015); //equality evaluates to true ot false

    if (cond) {
        alert("It is the year 2015!");
    }

//The ELSE Clause
    let day = prompt("On which day of the week do people tend to feel the worst?");

    if (day == Monday) {
        alert("Yep, everyone hates mondays...");
    } else if (day == Sunday) {
        alert("Yea, the next day IS monday after all :/");
    } else {
        alert("What're you waffling about?");
    }
    //In the code above, it checks if day == Monday is falsy, if so, it goes to the next
    //condition, day == Sunday, and if that is also falsy, it goes to the last alert.

    //There can also be more else if blocks. The final else is optional.

//Conditional Operator ?
    //Sometimes, we need to assign a variable depending on a condition.
    //For instance:
    let accessAllowed;
    let age = prompt("How old are you?", "");

    if (age >= 18) {
        accessAllowed = true;
    } else {
        accessAllowed = false;
    }
    //The so called "conditional" operator lets us do that in a shorter and simpler way.
    //The operator is represented by a ?. Sometimes it's called "ternary", because the 
    //operator has three operands. It is actually the one and only operator in JavaScript
    //which has that many.
    //The syntax is as follows:
        
        // let result = condition ? value1 : value2

    //Technically, we can omit the parentheses around age > 18. The question mark operator
    //has a low precedence, so it executes after the comparison >.
    //This example will do the same thing as the previous one:

        //the comparison operator "age > 18" executes first anyway
        // (no need to wrap it into parentheses)
        let conditionalAccessAllowed = age > 18 ? true : false

//Multiple ?
    //A sequence of question mark operators can return a value that depends on more than
    //one condition.
    //For instance:
    let conditionalAge = prompt("age?", 18);

    let message = (age < 3) ? "A.. baby...?" :
        (age < 18) ? "Hello!" :
        (age < 100) ? "Greetings1" :
        "what an unusual age!";
    
    alert(message);
    // 1. The first question mark checks whether age < 3.
    // 2. If true - it returns "A.. baby...?". Otherwise, it continues to the expression
    //  after the colon, checking age < 18.
    // 3. If that's true - it returns "Hello!". Otherwise, it continues to the expression
    //  after the next colon, checking age < 100. 
    // 4. If that's true - it returns "Greetings!". Otherwise, it continues to the expression
    //  after the last colon, returning "What and unusual age!".

    //Heres how that would look using if... else:
    if (age < 3) {
        message = "A.. baby...?";
    } else if (age < 18) {
        message = "Hello!";
    } else if (age < 100) {
        message = "Greetings!";
    } else {
        message = "What an unusual age!";
    } 

    