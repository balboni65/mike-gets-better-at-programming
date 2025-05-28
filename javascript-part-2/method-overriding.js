// #MARK: Method Overriding
// Used when a prototype has a method,
//   and that method may not be what we want in one of its child objects

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

const c = new Circle();

c.duplicate(); // duplicate

// To override the .duplicate() method:
//   Redefine it with the constructor
Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};
// Must be after "extend()"
//   If it is before, it will set this prototype, then reset it again with extend()

c.duplicate(); // duplicate circle (different from previous call)

// We can keep the original functionality by adding a .call() to the previous function

Circle.prototype.duplicate = function () {
  // Getting original
  Shape.prototype.duplicate.call(this);

  console.log("duplicate circle");
};

c.duplicate();
// duplicate
// duplicate circle
