//The operator accepts a single argument and does the following:

  //  1.Converts the operand to boolean type: true/false.
  //  2.Returns the inverse value.

  alert(!true);//false
  alert(!0);//true

//A double NOT !! is sometimes used for converting a value to boolean type:
alert(!!"non-empty string");//false
alert(!!null);//false

//That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.
//There’s a little more verbose way to do the same thing – a built-in Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.