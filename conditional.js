//Conditional Statements
    //Use IF to specify a block of code to be executed, if a specified condition is true.
    //Use ELSE to specify a block of code to be executed, if the same condition is false.
    //Use ELSE IF to specify a new condition to test, if the first condition is true.
    //Use SWITCH to specify many alternative blocks of code to be executed.

//The IF statement
    //Example
    if (hour < 18) {
        greeting = "Good Day";
    }
    //Good Day

//The ELSE statement
    //Example
    let hour = 19;
    if (hour < 18) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    }
    //Good Evening

//The ELSE IF statement
    //Example
    let time = 18;
    if (time < 10) {
        greeting = 'Good Morning';
    } else if (time < 20) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening"
    }
    //Good Day
