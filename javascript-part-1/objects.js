// #MARK: Objects

// You can put anything inside an object in JavaScript

// Object Literal
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: z,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); //Method

// objected oriented programing (OOP)
// A collection of objects that talk to eachtoher to perform functionality
// If a function is part of an object, it is instead called a "method"
// If a function has 1 or more methods, it has "behavior"

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: z,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// the draw function got duplicated

// #MARK: Factory Functions

function createCircle(radius, location) {
  return {
    // These values may change between circles, so we take them as input
    // If the key and the value is the same, you can remove the key
    // radius: radius,
    radius,
    location: location,
    isVisible: true,

    // Don't have to include function keyword
    draw() {
      console.log("draw");
    },
    // if you print a function, it returns of type "f"
  };
}

const myCircle = createCircle(1);

// #MARK: Constructor Function

// Constructor Function use PascalCase
function Circle(radius) {
  // a reference to the object executing this piece of code
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// the "new" sets the value to a blank javascript object
// if you drop the "new", inside Circle, "this" will instead reference the window
// So make sure to always add new to create the empty object first.
const circleWithConstructor = new Circle(1);
// goes to Circle function, "this" points to that empty object {}

// #MARK: Dynamic Nature of Objects

const triangle = {
  length: 1,
};

// Adding a property
triangle.color = "yellow";
triangle.draw = function () {};
// Remove a property
delete triangle.draw;

// Keep in mind all "const" means is that you cannot reassign its value
// You can add properties, but you can't do triangle={}

// #MARK: Constructor Property

// NOTE: All objects have a constructor by default
// doing circleWithConstructor.constructor prints the entire constructor
// doing this with a factory function prints f Object()
let example = {};
// JavaScript compiles it as "let example = new Object();"
// For instance you can do
new String();
new Boolean();
new Number();
// we use literals instead, "", true, 123433...
// so every object has a .constructor property, and that references the function used to create the object

// #MARK: Functions are Objects

function Square(length) {
  this.length = length;
  this.draw = function () {};
}
// Can do .something to get properties or perform methods
Square.name; // "Square"
Square.length; // 1 -> Number of Arguments
Square.constructor; // f Function()
// We can use that Function() constructor the same as the others

// NOTE: you have to use back tick "`"
const Square1 = new Function(
  "length",
  `this.length = length;
  this.draw = function () {}`
);

const newSquare = new Square1(1);

// Going back
Square.call({}, 1); //First parameter is the object you want "this" to point to
// Equivalent to:
const square2 = new Square(1);
// As a default, "this" references window

// Use an array to pass arguments
Square.apply({}, [1, 2, 3]);

// #MARK: Value vs Reference Types

// In JavaScript we basically only have Primitives and Objects
// As everything in the Reference Types (Objects Functions Arrays) are treated like objects

let x = 10;
let y = x;
x = 20;

// x is 20, y is 10
// Primitives are always independent
// The value of the primitive is copied to the other primitive
// So the variable x actually has a value inside of it

let a = { value: 10 };
let b = a;
a.value = 20;

// a is 20, y is 20
// this is because b is referencing a (reference type)
// For objects, the value is stored in memory, the reference to that memory is stored in the variable
// when b is set to a, what is actually set is the memory reference
// so the variable a and b actually have a memory reference inside of it

// Independent Primitives
let number = 10;
function increase(number) {
  number++; // This "number" is independent of the original, this is modifying a copy of the value
}
increase(number); // When this is called, it passes the value of the variable, in this case: the number 10
console.log(number); // Logs 10
console.log(increase(number)); // Logs 11

// Example with Reference Types
let objNumber = { value: 10 };
function increase(obj) {
  obj.value++; // obj is the actual object in memory
}
increase(objNumber); // When this is called, it passes the value of the variable, in this case: the reference to the object's value in memory
console.log(objNumber); // Logs 11

// #MARK: Enumerating Objects

const rectangle = {
  length: 1,
  draw() {
    console.log("draw");
  },
};
// Enumerate using for...in
for (let key in rectangle) {
  console.log(key, rectangle[key]);
  // Logs "length" 1
  // Logs "draw " f
  // draw() { console.log('draw') }
}

// Cannot do for...of
// These are only for iterables such as Arrays and Maps
// You can use it with Object properties
// Object.keys returns a string array of all property names
for (let key of Object.keys(rectangle)) {
  console.log(key);
  // Logs "length"
  // Logs "draw"
}

// Using entries returns a key value pair in an array
for (let entry of Object.entries(rectangle)) {
  console.log(entry);
  // Logs ["length", 1]
  // Logs ["draw", f]
}

// Can use the "in" property outside as well
if ("length" in rectangle) console.log("yes");

// #MARK: Cloning an Object
const another = {};

for (let key in rectangle) {
  another[key] = rectangle[key];
  // another['length'] = rectangle['length']
}

// Better way
// Object.assign does the exact same thing, "{}" is the target object to be modified
let anotherRectangle = Object.assign({}, rectangle); // All the same values
let yellowRectangle = Object.assign({ color: "yellow" }, rectangle); // All the same values + another property

// Shorter way
// Spread operator, takes all the values of the object inside the new blank object.
let spreadRectangle = { ...rectangle };

// #MARK: Garbage Collection

// Garbage Collector
// - Finds the variables that are no longer used, removes them from memory

// #MARK: Math

// Built in Objects in JavaScript:
// Math.pi etc.
// Random Number
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
// Math.round(1.9) => 2
// Math.max(1,2,3,4,5) => 5

// #MARK: String

const message = "hi";
// message. shows options even though its value is a primitive
let anotherString = new String("hi");
console.log(typeof message); // "string"
console.log(typeof anotherString); // "object"
// When we use . notation, the engine wraps the primitive in an object of the same type
// That way you can use object properties on a string literal

// Examples

const firstMessage = "This is my first message";
firstMessage.length; // 24
firstMessage[0]; // "T"
firstMessage.includes("my"); // true
firstMessage.includes("not"); // false
firstMessage.startsWith("This"); // true
firstMessage.startsWith("this"); // false (case sensitive)
firstMessage.indexOf("my"); // 8
firstMessage.replace("first", "second"); // This is my second message
// Returns a new string, does not modify original as its a primitive
firstMessage.toUpperCase(); // THIS IS MY FIRST MESSAGE
firstMessage.trim(); // Removes leading and trailing spaces
firstMessage.split(" "); // ["This", "is", "my", "first", "message"]

// Escape Notation
nullCharacter = "\0"; // NULL
newLine = "\n"; // Like hitting "enter"
carriageReturn = "\r"; // Moves the cursor to the start of the line, effectively rewriting it
// Can be used for progress bars
tab = "\t"; // Tab

// #MARK: Tempalte Literals

// Indicated by the back tick character ``
let originalMessage = "This is my \n" + "first message";
let templateMessage = `This is my
'first' message`;

let recipient = "Mike";
let number1 = 2;
let number2 = 4;
let email = `Hi ${recipient},

Thank you for joining my mailing list.
Here is ${number1} + ${number1} = ${number1 + number2} 

Regards,
Mosh`;
// Can use any expression that returns a value
// or call a function that returns a value

// #MARK: Dates

let dateNow = new Date();
let date1 = new Date("May 11 2018 09:00");
let date2 = new Date(2018, 0, 11, 9, 0); //year, month (0 based, january is 0), day, hour, minute
//When using the Date() object, key up/down to get options

dateNow.setFullYear(2018);
dateNow.toDateString(); //Thu May 11 2018
dateNow.toTimeString(); //11:35:01 GMT-0700 (PDT)
dateNow.toISOString(); //2017-05-11T18:35:01.212Z
// Use ISO for code

// #MARK: Private Properties and Methods

function Star(size) {
  this.length = this.length;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function (factor) {
    //...
  };

  this.draw = function () {
    this.computeOptimumLocation(0.1);

    console.log("draw");
  };
}

const star = new Star(10);
star.draw();

// Some of these properties and methods we should not be able to access
// For instance we can do: star.defaultLocation = false
// That would break everything
// To fix this, we make local variables and methods

function Star2(size) {
  this.length = this.length;

  // We don't want to let people access this, so we make it a local variable
  let defaultLocation = { x: 0, y: 0 };

  // Now a private member as well
  let computeOptimumLocation = function (factor) {
    //...
  };

  this.draw = function () {
    // ComputeOptimumLocations is just a function that exists in scope right now, so we can call it directly
    // Scope is temporary
    // Closure is permanent
    //  Closure is everything you have access to right now
    //  So within computeOptimumLocation, you will always have access to defaultLocation, as its within the closure
    //  however a variable inside draw() is not in the scope of defaultLocation to use
    computeOptimumLocation(0.1);

    console.log("draw");
  };
}

const star2 = new Star2(10);
star.draw();
