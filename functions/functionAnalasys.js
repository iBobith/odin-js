function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal("Goat"))

// In JavaScript, parameters are the items listed between the parentheses in the function
// declaration. Function arguments are the actual values we decide to pass to the function.
// In the example above, the function definition is written on the firs line:
//    function favoriteAnimal(animal);
// The parameter, animal, is found inside the parentheses. We could just as easily replace 
// animal with pet, x, or whatever. But in this case, naming the parameter animal gives
// someone reading our code a bit of context so that they don't have to guess what animal
// may eventually contain. By putting animal inside the parentheses of the favoriteAnimal()
// function, we are telling JavaScript that we will send some value to our favoriteAnimal
// function. This means that animal is just a placeholder for some future value. But what
// value are we sending? The last line:
    favoriteAnimal("Goat");
// is where we are calling our favoriteAnimal function and passing the value "Goat" inside
// that function. Here, "Goat" is our argument. We are telling the favoriteAnimal function,
// "Please send 'Goat' to the favoriteAnimal function and use 'Goat' wherever the 'animal'
// placeholder is." Because of the flexibility that using a parameter provides, we can 
// declare any animal to be our favorite.

// Make note of the fact that by calling favoriteAnimal() inside of console.log() with
// the argument "Goat" we get the return value of the function, string of "Goat is my
// favorite animal!", printed to the console. We're passing in a function call 
// favoriteAnimal("Goat") as an argument in a different function call - log().
// Keep this possibility in mind because you'll be passing in function calls as arguments
// somewhat often. If we just call the function without console.logging what it returns, 
// nothing would appear in the console but nonetheless the function would return that string.
