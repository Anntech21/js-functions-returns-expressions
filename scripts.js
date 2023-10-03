/***********************  Exercise 1  ************************/

// Review the following function:
function addNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addNumbers(6, 4);
console.log(sum);

// Create a variable called largerSum and assign it the value of calling the addNumbers function with new arguments. The result should be a number larger than the value of the variable, sum.

const largerSum = addNumbers(11, 13);
console.log(sum);

/***********************  Exercise 2 ************************/

let user1 = {
  name: "Rose Smith",
  programmer: true,
  age: 47,
};

let user2 = {
  name: "Tabitha Daniels",
  programmer: true,
  age: 27,
};

// Complete the function "greet" so that it returns the string "Welcome [NAME]! We are glad you are here." The function should be able to have user1 or user2 as an input.

function greet(name) {
  return "Welcome ${.name}! we are glad you are here.";
}

// Call the function so that "Welcome Rose Smith! We are glad you are here." is returned from the function and stored in a variable.

console.log(greet(user1.name));

// Call the function so that "Welcome Tabitha Daniels!  We are glad you are here." is returned from the function and stored in a variable.

console.log(greet(user2.name));

// Check both variables in the console. (With a console.log call or by evaluating the values directly in the console.)

//++function greet (name)

/***********************  Exercise 3 ************************/
// The function below, "makeName", should take a first name and last name as arguments, and return the first name and last name separated by a space:
// e.g. makeName("Rose", "Smith") => "Rose Smith"

// Fill in the missing arguments and function body:

function makeName() {
  // enter the arguments between the parenthesis
  return; // what should be returned?
}
function makeName(firstName, lastName) {
  return "${firstName} ${lastName}";
}

// Call the function and store the value in a variable.

const fullName = makeName("Rose"," Smith");
console.log(fullName);

/***********************  Exercise 4 ************************/

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const celsiusTemp = 25;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log("Temperature in Fahrenheit:", fahrenheitTemp);

// Change this code so that the user instead inputs fahrenheit and the function returns celsius. You will likely have to look up the conversion formula!

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius);
}
//++ const fahrenheit = parseFloat(prompt("What is the temperature in Fahrenheit?"));

// Call the function with different values.
//++ const celsiusTemperature = fahrenheitToCelsius(fahrenheit);
//++ console.log("Temperature in Celsius: ${celsiusTemperature}C");

// Have you changed the name of the function and the name of the parameter? If not, do it now!
console.log("Temperature in Fahrenheit:", fahrenheitTemp);

/***********************  Exercise 5 ************************/

let animals = ["monkey", "giraffe", "zebra", "rhino", "hippo"];

// Write a function called "first" that takes an array as an argument and returns the first element.
function first(arr) {
  return arr[0];
}

// Remove // -- from the below lines to test (VS Code can toggle comments on a line with Command-/).
// console.log("The first animal should be monkey:", first(animals));
// console.log("The first number should be 15:", first([15, 5, 23, 30]));
console.log("The first animal should be money:", first(animals));
console.log("The first number should be 15:", first([15, 5, 23, 30]));

/***********************  BONUS PRACTICE  ************************/

/***********************  Exercise 6 ************************/

// Declare a function "makeBio" that takes a "user" object as an argument and returns a minimal bio/profile sentence about the user. You can decide what properties a person has that might make a good bio sentence!

// Then make two example objects called `user3` and `user4`.

// Finally, uncomment the following two lines to test your function!
// console.log("Your bio is:", makeBio(user3));
// console.log("Your bio is:", makeBio(user4));

/***********************  Exercise 7 ************************/

// Convert the following function declaration into a function expression.

function square(num) {
  return num * num;
}

console.log(square(5)); // Expected output: 25
console.log(square(7)); // Expected output: 49

/***********************  Exercise 8 ************************/

// Convert the following function expression into a function declaration. Call the function twice with different arguments.

const formatName = function (firstName, lastName) {
  return `${lastName}, ${firstName}`;
};

console.log(formatName);