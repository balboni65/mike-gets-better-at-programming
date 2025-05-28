//  #MARK: Polymorphism

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

const c = new Circle();

// Define new shape object

function Square() {}
extend(Square, Shape);
Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

// Currently we have 2 different objects with different implementations of the duplicate method
// We have many implementations/forms of the duplicate method
// This is called Polymorphism

// Example, an array of Shapes
const shapes = [new Circle(), new Square()];
for (let shape of shapes) shape.duplicate();
// For every shape, a different version of "duplicate()" will be called
// Previously would have to do a check for every type, then call a unique function for each

// #MARK: When to use Inheritance
// An alternative is Composition

// Example
// Animal object with eat(), walk()
// Dog, Cat objects that inherit from it
// You then add the Goldfish object
// It cannot walk() so you have to change the hierarchy
//       Animal
//   Mammal | Fish
// Dog, Cat | GoldFish
// You know have a hierarchy instead of 1 level of inheritance
// As a general rule, don't go above 1 level of inheritance, find another way if needed.

// Favor "Composition" over "Inheritance"

// Composition is creating stand alone objects, then building what would of been the child objects, out of the composition objects

//       Animal              canWalk{} canEat{} canSwim{}
//   Mammal | Fish       =>
// Dog, Cat | GoldFish       Dog{canWalk, canEat} | Cat{canWalk, canEat} | Fish{canSwim, canEat}

// You can achieve this with Mixins

// #MARK: Mixins

// Defining one feature as an object
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

// Pass an empty object as the target
//   Then pass 1 or more source objects
const dog = Object.assign({}, canEat, canWalk); // New object is combination of all the members of both objects
console.log(dog); // {eat: f, walk: f}

// Same thing with constructors
function Cat() {
  this.fur = true;
}

// Modified the capability of Cat, added members of canEat and canWalk
Object.assign(Cat.prototype, canEat, canWalk); // New object is combination of all the members of both objects
const cat = new Cat();
console.log(cat);
// Cat {fur: true}
//    __proto__:
//      eat: f ()
//      walk: f ()
//      constructor: f ()
//      __proto__: Object

// Tomorrow we add ducks and goldfish, they can swim

const canSwim = {
  swim: function () {
    console.log("swim");
  },
};

function Goldfish() {
  this.ugly = "maybe";
}
Object.assign(Goldfish.prototype, canEat, canSwim); // New object is combination of all the members of both objects
// These are called compisitions or mixins

// We should extract this code to a new function
function mixin(target, ...sources) {
  // This actually uses the spread operator, which is spreading the array of sources, into individual arguments
  Object.assign(target, ...sources);
}

// Create a Duck
function Duck() {
  this.quack = "quack";
}
mixin(Duck.prototype, canEat, canSwim, canWalk);
const duck = new Duck();
console.log(duck);
// Cat {quack: "quack"}
//    __proto__:
//      eat: f ()
//      walk: f ()
//      swim: f ()
//      constructor: f ()
//      __proto__: Object
