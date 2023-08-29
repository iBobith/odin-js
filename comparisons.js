 //Greater/Less than:
    a > b;
    a < b;

//Greater/Less than or equals:
    a >= b;
    a <= b;

//Equals - A singe = is an assignment, whereas a double == is an equality test
    a == b; //a equals b
    a = b; //a is assigned b

//The notation for not equals in programming is !=
    a != b; //a does not equal b


//Boolean is the result
alert(2>1); //true (two is greater than one)
alert(2==1); //false (two is not equal to one)
alert(2!=1); //true (two is not equal to one)

let result = 5>4; //assign the result to the comparison
alert(result); //returns true

//String Comparison
alert("Z">"A"); //true
alert("Glow">"Glee"); //true
    //This comparison's logic is as follows:
    //G is the same as G
    //L is the same as L
    //O is greater than E. The comparison stops here.
    //Conclusion: the first string is greater.

    //Another thing to take not is that a capital letter is not equal to a lowercase letter
    //For my example I used capital letters to accentuate them within the reasoning
    //However, that was incorrect, in place of them, imagine the lowercase letters
    //Lowercase letters are greater than capital letters, because their index is greater
alert("Bee">"Be"); //true
    //The longer string is greater

//Comparison of different types
    //When comparing values of different types, JS converts the values to numbers
alert("2">1); //true, string "2" is converted to a number 2
alert("01"==1); //true, string "01" is converted to the number 1

//For boolean values, true becomes 1 and false becomes 0
alert(true==1); //true
alert(false==0); //true

//Strict Equality
    //A regular equality check (==) cannot differentiate 0 from false:
    alert(0==false); //true
    alert(""==false); //true

//A strict equality operator (===) checks the equality without type conversion
//In other words, if a and b are different types, then a===b will return false 
//without attempting to convert them.
alert(0===false); //false, their types are different (value===string)

//There is also a strict non-equality operator (!==)

//Comparisons with null and undefined
alert(null===undefined); //false
    //these values are different, because each of them is a different type
alert(null==undefined); //true

//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN
alert(null>0); //false
alert(null==0); //false
alert(null>=0); //true

//The value undefined shouldnt be compared to other values:
alert(undefined>0); //false
alert(undefined<0); //false
    //The first two comparisons return false, because undefined gets converted to NaN
    //and NaN is a special numeric value which returns false for all comparisons
alert(undefined==0); //false
    //The equality check returns false, because undefined ONLY equals null and undefined


//How to avoid problems
    //Treat any comparison with undefined/null except the strict equality with exceptional care.
    
    //Dont use comparisons (>= > < <=) with a variable which may be null/undefined
    //unless youre really sure of what youre doing. If a variable can have these values
    //check for them separately.
    
//Summary
    //Comparison operators return a boolean value

    //Strings are compared letter-by-letter in the "dictionary" order

    //When values of different types are compared, they get converted to numbers
    //(with the exclusion of a strict equality check)

    //The values null and undefined equal each other and do not equal any other value

    //Be careful when using comparisons like > or < with variables that can occasionally be
    //null or undefined. Checking for null/undefined separately is a good idea.