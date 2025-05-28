// #MARK: Private Members Using Symbols

class Circle {
  constructor(radius) {
    // public property
    this.radius = radius;
  }
}

const c = new Circle(1);
c.radius; // Can access

// Symbols are a unique identifier
// Every time you call it you get a new identifier
Symbol() === Symbol(); // False

// We can make a property "private" by making its property or method name a symbol
// Its still technically possible to get that value or method like so:

const _length = Symbol();
const _draw = Symbol();

class Square {
  constructor(length) {
    this[_length] = length;
  }
  [_draw]() {
    console.log("draw");
  }
}

const s = new Square(1);

// Can still get value like so:
const key = Object.getOwnPropertySymbols(s)[0];
console.log(s[key]); // 1
console.log(s);
// Square {Symbol() : 1}
//   Symbol(): 1
//   __proto__:
//     constructor: class Circle
//     Symbol(): f ()
//     __proto_: Object

// Doing s. doesn't show any available options

// #MARK: Private Members using WeakMaps

// WeakMap is a dicitonary where keys are objects and values can be anything
// the "keys are weak"
// If there are no reference to the keys, they are garbage collected
// In most cases, the "key" is the instance of the object "this"
const _width = new WeakMap();
const _move = new WeakMap();

class Diamond {
  constructor(width) {
    // Set the value of a private property
    _width.set(this, width);

    // Set the value of a private method
    _move.set(this, function () {
      console.log("move", this);
    });
  }

  draw() {
    // Read the value
    console.log(_width.get(this));
  }

  translate() {
    _move.get(this)(); // returns a function, so we add "()" to call it

    console.log("move should of been printed");
  }
}
const d = new Diamond(1);
console.log(d);
// Circle {}
//   __proto__:
//     constructor: class Circle
//     __proto__: Object

// No properties

d.draw(); // 1

d.translate();
// move undefined (this)
// move should of been printed

// Classes are always executed in strict mode so what would of pointed to the window, is instead undefined

// We can solve this problem using an arrow function, as they use the "this" value of their containing function

class Rectangle {
  constructor(width) {
    // Set the value of a private property
    // (key, property)
    _width.set(this, width);

    // Set the value of a private method (key, function)
    // Use an arrow function to keep the context of the object as "this"
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    console.log(_width.get(this));
  }

  translate() {
    _move.get(this)();

    console.log("move should of been printed");
  }
}
const r = new Rectangle(1);
r.translate(); // now displays the object correctly instead of undefined
// move Rectangle{}
// move should of been printed

// #MARK: Getters and Setters

// before we used Object.SetProperty, now we can use "get" and "set" and it looks like a function,
//   but is called like a property

const _pages = new WeakMap();
const _turn = new WeakMap();

class Newspaper {
  constructor(pages) {
    _pages.set(this, pages);
    _turn.set(this, () => {
      console.log("turn", this);
    });
  }
  flip() {
    _move.get(this)();
  }

  // getter
  get pages() {
    return _pages.get(this);
  }

  set pages(value) {
    if (value <= 0) throw new Errorr("Invalid Number of Pages");
    _radius.set(this, value);
  }
}
const n = new Newspaper(10);
n.flip(); // now displays the object correctly instead of undefined
n.pages; // 10
n.pages = 20;
n.pages; // 20
n.pages = -1; //error
n.pages; // 20

// #MARK: Inheritance

class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

// We want it to inherit from shape
class Pentagon extends Shape {
  draw() {
    console.log("draw");
  }
}

const p = new Pentagon("red");
// Pentagon {}
//   __proto__: Shape
//     constructor: class Circle
//     draw: f draw()
//     __proto__: Object
//       constructor: class Shape (constructor property is auto set and we can see both now)
//       move: f move()
//       __proto__: Object
p.move(); // move
p.draw(); // draw

// If we add a constructor in "Shape()" no errors
// If we then add a constructor in "Pentagon()" we get:
//   Uncaught ReferenceError: Must call super constructor in derived
//     class before acessing 'this' or returning from derived constructor at new Pentagon

// If you add a constructor in a child class, make sure to call the parent constructor first to initialize the base object
// Have to add "super()"

// New Example using super()
class Octogon extends Shape {
  constructor(color) {
    super(color);
    this.length = this.length;
  }
  draw() {
    console.log("draw");
  }
}

const o = new Octogon("red", 5);
o.color; // red
o.length; // 5
// Keep in mind for classes we inherit the properties when using super
// So instead of color being in the prototype, its in the object instance

console.log(o);
// Octogon {color: "red", length: 5}
//   color: "red"
//   length: 1
//   __proto__: Shape

// #MARK: Method Overriding

// Override move()
class Hexagon extends Shape {
  move() {
    console.log("Hexagon move");

    // We can call the parent move method inside using super.
    super.move(); // "move"
  }
}

const h = new Hexagon();
h.move; // "Hexagon move" "move"
console.log(h);
// Hexagon {}
//   __proto__: Shape
//     constructor: class Hexagon
//     move: f move()
//     __proto__:
//       constructor: class Shape
//       move: f move()   //(Appears Twice!)
//       __proto__: Object

// Because it walks up the prototype tree, it uses the first one it finds
// Finds child "move()" first
