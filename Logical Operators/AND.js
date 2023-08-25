alert(true && true);//true
alert(false && true);//false
alert(true && false);//false
alert(false && false);//false

//AND returns true if both operands are truthy and false otherwise.

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert("The time is 12:30");
}

if (1 && 0) {//the same as (true && false)
    alert("This wont work, because the result is falsy")
}

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

