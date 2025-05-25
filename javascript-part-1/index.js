console.log("Hello World");

// Primitive Types
let name = 'Mike'; // String Literal
let age = 30; // Number Literal (not int, float)
let isApproved = true; // Boolean Literal
let firstName; // Value has not been assigned
let selectedColor = null; // Use when you want to clear the value of a variable

// Reference Types (objects, arrays, functions)
let person = {
  name: 'Mike', // Key value pair
  age: 30,
}; // When using curly braces, its an Object Literal

// Dot Notation
person.name = 'Dorn';

// Bracket Notation
person['name'] = 'Dorn';

// Arrays
let selectedColors = ['red', 'blue']; // Array Literal
selectedColors[2] = 1; // Array is still an object, and dynamic so you can have different types of values
selectedColorsLength = selectedColors.length;
// if you do "selectedColors.", it will show object methods"

// Functions
// A set of statements that perform a task or calculate a value
// The value inside is now a "Parameter"
function greet(name) {
    // Body of the function
  console.log('Hello ' + name);
}

// The value inside is an "Argument"
greet(name);