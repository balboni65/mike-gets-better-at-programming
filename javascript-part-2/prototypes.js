// #MARK: Inheritance

// From Before:

//      Mechanism for eliminationg redundant code
//      Example: TextBox, SelectBox, CheckBox components
//          - All have the following properties: hidden, innerHTML
//          - All have the following methods: click(), focus()
//      Define these once in an object: HTMLElement
//      These objects then inherit that code
//      The HTMLElement class is the Base/Super/Parent class
//      The TextBox is the Derived/Sub/Child class
//      Refer to the relation between the 2 as "IS-A relationship"
//          "TextBox is a HTMLElement"
//      This is all classical inheritance because it uses classes
//      In JavaScript, we have Prototypical Inheritance

// #MARK: Prototypical Inheritance

// We only have objects in JavaScript, not Classes
// Example:
//      We have a circle object
//      We have a parent object called shape with a function (location())
//      the "shape" object is a prototype because its a parent object
//      It has child objects that inherit from it
//      parent = prototype
//      A child object inherits all of the members defined in the prototype object.
//      Every object in JavaScript has a prototype(parent) except 1 who is the OG

let x = {};
// When inspecting:
//  __proto__: Object
//      Note: This is deprecated, but still viewable
//      Has things inside it like constructor, hasOwnProperty, toString etc.

let y = {};
// Has the same default object prototype

Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // true
// Cannot do: x.__proto__ === y.__proto__ (deprecated)

x.toString(); // Inhereted from its prototype
// First checks for the member (property or method) within the object
// Sees that there is no such member in x
// It then goes to its Prototype
// If it doesn't find it there it keeps going all the way up the "prototype chain" to the root object
// Prototypes are just regular objects

// #MARK: Multi-level Inheritance

let myArray = [];
// Prototype has array functionality like .indexOf() etc.
// That array Prototype has another prototype
// When you inspect, you will see all the object functionality from before
// Therefore an array inherits all the object members, and array members
// This is called Muli-Level Inheritance

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);
// When inspecting "circle":
// It has protoype: Circle(radius)
//  - This is the constructor!
// When inspecting the Circle(radius) prototype:
// We get back to Object
// ALL objects created by the same constructor will have the same prototype

// #MARK: Property Descriptors

let person = { name: "Mike" };
console.log(person); // Displays object members

for (let key in person) console.log(key); // Just Displays the value, can't see the same object options

// Showing the prototype

let objectBase = Object.getPrototypeOf(person);
console.log(objectBase); // Logs the object members
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);
/* {
configurable: true,
enumberable: false,
value: f toString()
writable: true
} */

// configurable: We can delete this member
// enumberable: When we iterate through, we cannot see prototype options
// value: Set to a method, which is the default toString() method
// writable: We can override this method, we can change its implementation and set its value

// Previously used to define getter/setter
Object.defineProperty(person, "name", {
  // Defined get/set here
  writable: false, // Makes the object read only
});
person.name = "Bob";
console.log(person); // Mike (not Bob)

Object.defineProperty(person, "name", {
  enumerable: false, // person's members will no longer show up in Object.keys()
  // enumerable: true, // person's members will all show up in Object.keys()
});
console.log(Object.keys(person)); // [] (Displays an empty array)

Object.defineProperty(person, "name", {
  configurable: false, // We can no longer delete properties
});
delete person.name; // nothing happens
console.log(Object.keys(person)); // Mike
person.lastName = "Dorn"; // Can still add values as its different than "name"
console.log(Object.keys(person)); // Mike Dorn

// #MARK: Constructor Prototypes

// Proper way to get a prototype
Object.getPropertyOf(myObj); // The stuff under myObj.__proto__ (parent of myObj)
// Constructor.prototype()

function Square(length) {
  this.length = length;
}

Square.prototype; // Object base we saw earlier
const square = new Square(1);

let someArray = [];
someArray.__proto__; // Array base
// Under the hood this uses the Array constructor
//   let someArray = new Array()
Array.prototype; // Array base

// #MARK: Prototype vs Instance Members

function Diamond(length) {
  this.length = length;

  this.draw = function () {
    console.log("draw");
  };
}

const d1 = new Diamond(1); // logs as Diamond { length: 1, draw f}
const d2 = new Diamond(2); // logs as Diamond { length: 2, draw f}
// The draw method is copied in memory
// If you have 1000 diamonds, you have 1000 draw methods in memory
// Move the draw method out of the Diamond object, and put it into its prototype

Diamond.prototype === d1.__proto__; // Referencing same object in memory

// Moving Draw to Prototype

function Diamond1(length) {
  // This is an "Instance Member"
  this.length = length;
  // Removed Draw method
}

// "Prototype Member"
Diamond1.prototype.draw = function () {
  console.log("draw");
};

const d11 = new Diamond1(1); // logs as Diamond1 { length: 1 }
const d12 = new Diamond1(2); // logs as Diamond1 { length: 2 }
d11.draw(); // draw (Still works!)
// This is because of prototypical inheritance
// An object has access to every member of its prototype

d11.toString(); // "[object Object]"

// We can override other prototype members instead of adding them

Diamond1.prototype.toString = function () {
  return "Diamond with length " + this.length;
};

d11.toString(); // "Diamond with length 1"
// Keep in mind it doesn't find toString() in the d11 object
// It finds it in the prototype of the Diamond1 object
// That prototype had its member overriden

// Keep in mind the prototype can access the instance members of its children

function Diamond2(length) {
  // This is an "Instance Member"
  this.length = length;
  this.move = function () {
    console.log("move");
  };
}
Diamond2.prototype.draw = function () {
  this.move(); // Referencing instance member method of all Diamond2 objects
  console.log("draw");
};
const d21 = new Diamond2(1);
d21.draw(); // move draw

// We can do the same in reverse, you can access the prototype's members

function Diamond3(length) {
  this.length = length;
  this.move = function () {
    // Draw the circle first
    this.draw();
    // Same as d31.draw() goes to the prototype
    console.log("move");
  };
}
Diamond3.prototype.draw = function () {
  //   this.move(); // Have to delete this to remove a circular dependency. Each one calls eachother infinitely
  console.log("draw");
};
const d31 = new Diamond3(1);
d31.draw(); // draw move

// #MARK: Iterating Instance and Prototype Members

// Keep in find that the order doesn't matter when creating an object, and editing its prototype
// It all goes off of references

console.log(Object.keys(d31)); // Only returns instance members ["length", "move"]

for (let key in d31) console.log(key); // Returns all instance and prototype members
// length
// move
// draw

// sometimes we use own instead of instance
d31.hasOwnProperty("length"); // true
d31.hasOwnProperty("draw"); // false
// See how its OwnProperty instead of InstanceProperty

// #MARK: Avoid Extending the Bult-in Objects

Array.prototype.shuffle = function () {
  //..
};

const newArray = [];
array.shuffle();

// What we've done here is extend a constructor we didn't build
// In this case, the base Array constructor
// If we download a third party process, it may use members from this
// If we add/delete/change those members, it will cause very difficult to find bugs
// DON'T MODIFY OBJECTS YOU DON'T OWN

// #MARK: Exercise
// Starting Point: Move the methods to the prototype

function Stopwatch1() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = nullendTime = null;
    running = false;
    duration = 0;
  };

  // Read Only
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// Solution

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  // Going to move the variables to public properties that are read only
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

// this => stopwatch.prototype
Stopwatch.prototype.start = function () {
  // running => this.running
  if (this.running) throw new Error("Stopwatch has already started.");
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch has not started.");

  this.running = false;

  this.endTime = new Date();

  const seconds = (endTime.getTime() - this.startTime.getTime()) / 1000;
  // Cannot be modified as it doesn't have a setter
  // We can't add a setter, because then people can change value of it
  this.duration += seconds;
  // Code is now screwed
  // Premature Optimizaiton is the root of all evils
};

Stopwatch.prototype.reset = function () {
  this.startTime = nullendTime = null;
  this.running = false;
  // Same issue
  duration = 0;
};
