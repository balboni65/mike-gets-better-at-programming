// #MARK: Creating your own Prototypical Inheritance
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype.duplicate = function () {
  console.log("duplicate");
};

// We want to add a Square() constructor, that also has the duplicate method
// To solve this problem, we put them both under the same prototype

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

const s = new Shape(); // Inherits from Shape Base, duplicate method inside of that, inherits from object base
const c = new Circle(1); // Inherits from Circle Base, draw method inside of that, inherits from object base

// Argument is a prototype
Circle.prototype = Object.create(Shape.prototype); // Returns an object that inherits from shape base
// Previously inherited from object, now:
// circle => shape => object

c.draw(); // draw
c.duplicate(); // duplicate

// #MARK: Resetting the Constructor

// If we didn't do this line: "Circle.prototype = Object.create(Shape.prototype);"
new Circle.prototype.constructor(1); // Circle {radius: 1}
new Circle(1); // Circle {radius: 1}
// These are the same
// Prototype goes up 1, constructor goes down 1

console.log(c);
// Circle {radius: 1}
//      __proto__: Shape
//          draw: f ()
//          constructor: f Shape()
//          __proto__:

// See that constructor can still be called (c.constructor)

// When we add back this line: Circle.prototype = Object.create(Shape.prototype);
// We get this, where constructor is now one more level deeper
console.log(c);
// Circle {radius: 1}
//      __proto__: Shape
//          draw: f ()
//          __proto__:
//              duplicate: f()
//              constructor: f Shape()
//              __proto__: Object
//                  (object base members...)

new Circle.prototype.constructor(); // shape {}
// should be circle {}

// When changing the prototype of a constructor, always reset the constructor property
// From before: Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

console.log(c);
// Circle {radius: 1}
//      __proto__: Shape
//          draw: f ()
//          constructor: f Circle()
//          __proto__:
//              duplicate: f()
//              constructor: f Shape()
//              __proto__: Object
//                  (object base members...)

// The constructor is now correctly back in the circle members.
