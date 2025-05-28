// #MARK: Call the Super Constructor

// We now want shape to take a color as an argument.
function Shape(color) {
  // *new*
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// Adding argument
function Circle(radius, color) {
  // Adding call
  Shape(color);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
// Set the new color value
const c = new Circle(1, "red");

console.log(c); // Circle {radius: 1}
// There is no color property when there should be

// This is because this.color = color is assigning its value to the window/global instead of the Circle Object.
console.log(window.color); // "red"

// Instead, we need to use.call()
// Updated:
function Shape2(color) {
  this.color = color;
}

Shape2.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle2(radius, color) {
  // USING .CALL
  // Pass the context first
  Shape2.call(this, color);
  // This is called the "super constructor"

  this.radius = radius;
}

Circle2.prototype = Object.create(Shape2.prototype);
Circle2.prototype.constructor = Circle2;

Circle2.prototype.draw = function () {
  console.log("draw");
};

const s2 = new Shape();
const c2 = new Circle(1, "red");

console.log(c); // Circle {color: "red", radius: 1} (FIXED)

// #MARK: Intermediate Function Inheritance

// Lets create another object that inherits from shape
function Square(size) {
  this.size = size;
}

Square.prototype = Object.create(Shape2.prototype);
Square.prototype.constructor = Square;

console.log(sq); // Square {size: 10}
// lets move the above code into a function

// New code:

function Diamond(size) {
  this.size = size;
}

// First letter is uppercase b/c we are expecting them to be a constructor function
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
// This is called intermediate function inheritance

extend(Diamond, Shape);

const d = new Diamond(10);
d.duplicate(); // duplicate (works)
