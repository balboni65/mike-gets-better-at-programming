// #MARK: Declarations vs Expressions

walk(); // Function Declarations can be called before they are defined

// Function Declaration
function walk() {
  console.log("walk");
}
// no semicolon here ^

// Anonymous Function Expression
let run = function () {
  console.log("run");
};
// No function name

// Named Function Expression
let run2 = function walk() {
  console.log("run");
};
// No function name
run2(); // "run"

let move = run2();

move(); // "run"

// #MARK: Hoisting
// Function declarations are automatically moved to the top of the page when compiled at runtime
// Process of moving function declarations to the top of the file
// This is why you can call functions that are defined later

// #MARK: Arguments

function sum(a, b) {
  console.log(arguments); // Logs an object with info about what was passed
  // Arguments [1,2, callee: f, symbol (symbol.iterator): f]
  // 0: 1
  // 1: 2
  // callee: f sum(a, b)
  // length: 2
  // Symbol(Symbol.iterator): f values()
  return a + b;
}

console.log(sum(1, 2)); // works
console.log(sum(1)); // (1, undefined) NaN
console.log(sum(1, 2, 3, 4, 5, 6)); // works (only the first 2 arugments work)

function sumAll() {
  // No stated varriables needed ^
  let total = 0;
  // Because arguments contains an iterator, we can use "of"
  for (let value of arguments) total += value;
  return total;
}

console.log(sumAll(1, 2)); // 3
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21

// #MARK: Rest Operator
// Looks like spread operator ...
// sum(...args)

console.log(sumRest(1, 2)); // 3
console.log(sumRest(1)); // 1
console.log(sumRest(1, 2, 3, 4, 5, 6)); // 21

function sumRest(...x) {
  console.log(x); // [1,2,3,4,5,6]

  return x.reduce((a, b) => a + b);
}

// Shopping cart example w/ discount
console.log(sumShopping(0.1, 2.1, 20.4, 29.9));

// First variable becomes the discount
function sumShopping(discount, ...prices) {
  // You cannot have another varirable after the rest operator, it must be the last one
  // (discount, ...prices, tax) will throw error
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

// #MARK: Default Parameters

function interest(principal, rate, years) {
  // from before, fixed value
  rate = rate || 3.5; // if you don't provide a rate, it has a default.

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5)); // 1750

// You can set default values in the function this way:
function interest2(principal, rate = 3.5, years = 5) {
  // Defaults
  return ((principal * rate) / 100) * years;
}
// If you give something a default value:
//   you must give everything else after a default value
//   Otherwise it will be undefined

console.log(interest2(10000)); // 1750
// Can pass undefined
console.log(interest2(10000, undefined, 5));

// #MARK: Getter and Setters

const person = {
  firstName: "Mike",
  lastName: "Dorn",
  baseName: function () {}, // Base example
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

// This is Read Only, in which you cannot set their full name all at once
person.fullName = "John Smith"; // Adds a new property instead
// This would then not be used by the function.

console.log(person.firstName + "" + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.fullName());

// Getters => access properties in an object
//    - contain the "return" keyword
// Setters => change (mutate) them
//    - has some amount of this.property = new value

const person2 = {
  firstName: "Mike",
  lastName: "Dorn",
  get fullName() {
    // Prefix with "get"
    return `${person2.firstName} ${person2.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person2.fullName);

// Set a new value
person2.fullName = "John Smith";

console.log(person2.fullName);

// Another way

function Star(size) {
  this.length = this.length;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    //...
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw");
  };

  // If we want to access the value of defaultLocation, without making it modifyable
  // Read only property
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid locaiton.");
      defaultlocation = value;
    },
  });
}

const star = new Star(10);
star.defaultLocation = 1; // Error: Invalid Location
star.draw();

// #MARK: Error Handling

person2.fullName = true; // Get a type error

const person3 = {
  firstName: "Mike",
  lastName: "Dorn",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") return; // Error handling
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person3.fullName = true;
console.log(person3.fullName); // Mike Dorn (never changed)

const person4 = {
  firstName: "Mike",
  lastName: "Dorn",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      // Keep in mind anything with Pascal case in javascript is a constructor function
      // Creating new Error object using its constructor
      throw new Error("Value is not a string."); // Throw an exception, not an error
      // Need to catch this exception later

      const e = new Error(); // This is defining an error
      throw e; // This is throwing an exception
      // This is an exceptional situation that should not have happened
    }
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person4.fullName = true;
} catch (e) {
  // Error object "e"
  console.log(e);
}
// The above code will throw an error in the console

console.log(person4.fullName); // Mike Dorn (never changed)

try {
  person4.fullName = ""; // Doesn't throw an error, the split function gets (["", undefined])
} catch (e) {
  // Error object "e"
  console.log(e);
}
console.log(person4.fullName); // ""

// New implementation to account for that

const person5 = {
  firstName: "Mike",
  lastName: "Dorn",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person5.fullName = ""; // Now throws a new error
} catch (e) {
  console.log(e); // Enter a first and last name
}
console.log(person4.fullName); // Mike Dorn

// #MARK: Local vs Global Scope

const message1 = "hi";
console.log(message1); // hi

{
  const message2 = "hi";
}
console.log(message2); // Uncaught ReferenceError: message is not defined
// out of scope ^
// let/const scope is limited to the code block they are defined

function start() {
  const message = "hi";
  if (true) {
    const another = "bye";
  }
  console.log(another); // Uncaught ReferenceError: another is not defined
}

function stop() {
  const message = "hi"; // Same variable name, different scopes so good
}

// Global example
const color = "red"; // global scope, accessible everywhere

function log() {
  console.log(color); // red
}

function log2() {
  const color = "blue"; // Local variables take precidence over global
  console.log(color); // blue
}

// #MARK: Let vs VAR

let x = 0;
var y = 0;

function exampleLet() {
  // Defined with "let"
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // Error: I is not defined
}
exampleLet(); // 0 1 2 3 4

function exampleVar() {
  // Defined with "let"
  for (var i = 0; i < 5; i++) {
    console.log(i);

    if (true) {
      if (true) {
        if (true) {
          var color = "red";
          let shape = "circle";
        }
      }
    }
  }
  console.log(i); // 5
  console.log(color); // red
  console.log(shape); // Error shape is not defined
}
console.log(i); // Error: I is not defined

exampleVar(); // 0 1 2 3 4

// VAR IS LIMITED TO THE FUNCTION IN WHICH ITS DEFINED
// var => function scoped
// let, const => block scoped

// Outside of a function

var rating = 10; // creates a global variable and attatches it to the window object
let age = 30;

console.log(window.rating); // 10
console.log(window.age); // undefined

// This can cause issues when using third party libraries that affect the window object
// It can get quite large and if the variable names match up it can override your variable or visaversa

function sayHi() {
  console.log("hi");
}

console.log(window.sayHi()); // hi (works!)
// We need to encapsulate these in seperate modules later so they aren't added to the window object

// #MARK: This keyword

// .this is "The OBJECT that is executing the current function"

// if a function is part of an object it is called a method
//   ".this" references the object itself

// In a normal function function sum();
//   ".this" references the global object ("window" for browsers, "global" for node)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play(); // {title: 'a', play: f}
// logs the video object

video.stop = function () {
  console.log(this);
};

video.stop(); // {title: 'a', play: f, stop: f}

function playVideo() {
  console.log(this); // window object or global object
}

// Constructor function
function Video(title) {
  this.title = title;
  console.log(this); // Keep in mind this still runs when called like before
}

const v = new Video("b"); // {title: "b"}
// Keep in mind this is a constructor, so it first creates an empty object {}
// this.title, references the property of that empty object {}

// ".this" in callback functions

const book2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    });
    // "this" is actually the window object, not the book object
    // callback functions are regular functions
    // they get the ".this" context based on how they are called
    // "calling context"
  },
};
book2.showTags(); // window object "a", window object "b", window object "c"

const book3 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this, tag);
      },
      { firstName: "Mike" }
    );
    // Optionally takes context as another parameter
    // We can manually set this to whatever we want, in this case {firstname: "Mike"}
  },
};
book3.showTags(); // {firstName: "Mike"} "a", {firstName: "Mike"} "b", {firstName: "Mike"} "c",

const book4 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    }, this);
    // Optionally takes context as another parameter
    // We can manually pass "this" which is the book4 object
  },
};
book4.showTags(); // book4 object "a", book4 object "b", book4 object "c",

const book = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => console.log(this, tag));
    // "this" is now the book object
    // they get the ".this" context based on the surrounding scope when they are called
    // "lexical scope"
  },
};
book.showTags(); // book object "a", book object "b", book object "c"

// #MARK: Changing This

const show = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // Set context in the method

    // callback function using new "self" variable
    this.tags.forEach(function (tag) {
      console.log(self, tag);
    });
  },
};
show.showTags(); // a a, a b, a c

function playVideo() {
  console.log(this);
}
// functions of objects

// First parameter is thisarg, following parameters are arguments for the function
playVideo.call({ name: "mosh" }, 1, 2, 3); // { name: "mosh" }
playVideo(); // window object

playVideo.apply({ name: "mosh" }); // { name: "mosh" }
// Difference is passing arguments, must be done as an array
playVideo.apply({ name: "mosh" }, [1, 2, 3]); // { name: "mosh" }

// Does not call the function, returns a new function, with "this" permanately set to parameter
const fn = playVideo.bind({ name: "mosh" }); // f
fn(); // { name: "mosh" }

// Adding function () at the end immediately calls the new function
playVideo.bind({ name: "mosh" })(); // { name: "mosh" }

// Going back:

const series = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
      // While still in the method, .bind() permanately changes the "this" reference or object reference
      // sets the object to "series"
    );
  },
};
series.showTags(); // a a, a b, a c

// Best solution is the arrow function from above.
