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