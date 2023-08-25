//If any of the following arguments are true, it will return true, otherwise it returns false

alert( true || false); //true
alert( false || true); //true
alert( true || false); //true
alert( false || false); //false

//The number 1 is treated as true, whereas the number 0 is false

if (1 || 0) {//the same as (true || false)
    alert("truthy!");
}

let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend){
    alert("The office is closed.");
}
//OR looks for the first truthy value

alert(1||0);//1 is the truthy value
alert(null||0||1); //1 is the truthy value
alert(undefined||null||0);//all values are falsy, returns the last value