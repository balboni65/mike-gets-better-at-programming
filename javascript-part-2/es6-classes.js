// #MARK: ES6 Classes

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}

class Square {
  // body of the class
  // define properties and methods as normal
  constructor(length) {
    this.length = length;
    // don't use this.draw = function(){}
  }
  // no function draw()
  draw() {
    // Declare functions like this.
    console.log("draw");
  }
}

const s = new Square(1);
console.log(s);
// Square {length: 1}
//   length: 1
//   __proto__:
//     constructor: class Circle
//     draw: f draw()
//     __proto__: Object

// If you don't want a funciton to appear on the prototype, it needs to be inside the constructor

class Diamond {
  constructor(length) {
    this.length = length;
    // Is in Object
    this.move = function () {
      console.log("moving");
    };
  }
  // Is in prototype
  draw() {
    console.log("draw");
  }
}
const d = new Diamond(1);
console.log(d);
// Diamond {length: 1, move: f}
//   move: f ()
//   length: 1
//   __proto__: Object
//     constructor: class Circle
//     draw: f draw()
//     __proto__: Object

// Classes are not a special new thing in JavaScript, they are constructor functions
console.log(typeof Square); // "function"

// You always have to include new
const d2 = Diamond(); // Uncaught TypeError: Class constructor Circle canont be invoked without 'new'

// This is different from constructors that will attatch it to the window
const c = Circle(); // window

// #MARK: Hoisting

// Function Declaration
function sayHello() {} // no semicolon

// Function Expression
const sayGoodbye = function () {}; // add semicolon

// Function Declarations are hoisted, they are raised to the top of the code, and can be used at any time
//   Can be called before its defined

// We can do the same thing with classes, as they are effectively funcitons

// Class Declaration
class Book {}

// Class Expression
const Article = class {};
// Basically useless
// Classes are meant to be used for inheritance, if you are creating 1 instance of it, no point

// Classes are NOT HOISTED
// You cannot create a "Book" class, before its defined

// #MARK: Static Methods

// 2 types, instance and static methods

class Movie {
  constructor(title) {
    this.title = title;
  }

  // Instance Method
  watch() {}
  // Only available on an instance of a class (object)

  // Static Method
  static rate(value) {
    console.log("rated " + value);
  }
  // By adding static, its no longer available on a movie object
  // movie.rate (doesn't show up)
  // When inspecting "movie" variable, isn't there
  // But it is available via the Object itself
  // Movie.rate() (Does show up)
  // These methods don't work on a particular instance of Movie, they only work on the class itself
  // So to call static methods, we never have to call or create an instance of the class
}

const movie = new Movie("a");
console.log(movie);
// Movie {title: "a"}
//   title: "a"
//   __proto__:
//     constructor: class Circle
//     draw: f draw()
//     __proto__: Object

// Static Methods
// Only available on the class itself, not the object instance
// Used to create utility functions that are not specific to a certain object

// For example, "watch()" is specific to the Movie Object

// Static functions are not tied to an instance of the object, just the object as a whole
// For example, when using Math
Math.PI;
// We didn't have to do:
const math = new Math();
// We just called a static function, of the Math Object
// This is basically built like this:
class Math2 {
  static abs(value) {
    // ...
  }
}
Math.abs(); // Same thing

// #MARK: This Keyword

const Triangle = function () {
  this.draw = function () {
    console.log(this);
  };
};
const t = new Triangle();

// Method call (function inside an object)
t.draw(); // Triangle {draw: f}
// This logs the instance of the object

const draw = t.draw; // Not calling the method, just saving the reference
console.log(draw); // f () { console.log(this); }

// Function call (function outside of an object)
draw(); // See window object, this refers to current context

("use strict");
// This makes it so warnings become exceptions
// Furthermore "this" keyword can no longer point to the window/global object
// It instead goes to undefined
draw(); // This now returns undefined instead

class Example {
  draw() {
    console.log(this);
  }
}
const e = new Example();
const drawE = e.draw;
drawE(); // Undefined
// This is because by default, body of classes run in strict mode
