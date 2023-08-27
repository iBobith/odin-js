//The "switch" Statement
    //A switch statement can replace multiple if checks.
    //It ives a more descriptive way to compare a value with multiple variants.

    //The Syntax
    //The switch has one or more case blocks and an optional default.
    //It looks like this:

    switch(x) {
        case "value1": // if (x === "value1")
            alert("Value1!");
            break;

        case "value2": // if (x === "value2")
            alert("Value2!");
            break;

        default:
            alert("Default!")
    }
    //The value of x is checked for a strict equality to the value from the first case
    //(that is, value1) then to the second (value2) and so on.
    //If the equality is found, switch starts to execute the code starting from the 
    //corresponding case, until the nearest break (or until the end of switch).
    //If no case is matched then the default code is executed, if it exists.mm

    //Example:
    let a = 2 + 2;

    switch(a) {
        case 3:
            alert("Too small!")
            break;
        case 4:
            alert("Exactly!");
            break;
        case 5:
            alert("Too big!");
            break;
        default:
            alert("Hmm.. try again!");
    }

//Grouping of cases
    let d = 3;

    switch(d) {
        case 4: 
            alert("Right!");
            break;

        case 3: // (*) grouped two classes
        case 5:
            alert("Wrong!");
            alert("Why don't you take a match class?");
            break;

        default:
            alert("The result is strange. Really.");
    }
    //Now both 3 and 5 show the same message.
    //The ability to "group" cases is a side effect of how switch/case works without break.
    //Here the execution of case 3 starts from the line (*) and goes through case 5,
    //because there'r no break.

    //Type matters
    //Let's emphasize that the quality check is always strict. The values must be of the
    //same type to match.
    //For example, let's consider the code:
    let arg = prompt("Enter a value?");
    switch(arg) {
        case "0":
        case "1":
            alert("One or zero");
            break;

        case "2":
            alert("Two");
            break;

        case 3:
            alert("Never executes!");
            break;
        
        default:
            alert("An unknown value");
    }
    // For 0, 1, the first alert runs.
    // For 2 the second alert runs.
    // But for 3, the result of the prompt is a string "3", which is not strictly equal ===
    // to the number 3. So we've got a dead code in case 3! The default variant will execute.


    // Exercise:
    // The goal is to rewrite the "switch" into an "if"

    switch(browser) {
        case "Edge":
            alert("You've got the Edge!");
            break;

        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            alert("Okay, we support those browsers too!");
            break;

        default:
            alert("We hope that this page looks ok!");
    }

    // Rewrite into "if"

    if (browser == "Edge") {
        alert("You've got the Edge!");
    } else if (browser == "Chrome" 
                || browser == "Firefox" 
                || browser == "Safari" 
                || browser == "Opera") {
        alert("Okay, we support those browsers too!");
    } else {
        alert("We hope that this page looks ok!");
    }

    // Now I'm gonna do the opposite - rewriting the "if" into a "switch"

    let b = +prompt("b?", "");

    if (b == 0) {
        alert(0);
    }   
    if (b == 1) {
        alert(1);
    }
    if (b == 2 || b == 3) {
        alert("2,3");
    }

    // Now, I'm gonna rewrite it into a switch, but instead of b, its c (to avoid errors)

    let c = +prompt("c?", "");

    switch(c) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2,3");
            break;
    }
    