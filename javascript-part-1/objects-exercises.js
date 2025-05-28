// #MARK: Exercise 1
// Create an "address" object with 3 properties
// street, city, zipCode
// Then Create a function called showAddress(address)
// - Displays all the properties along with their value

let address = {
  street: "sesame street",
  city: "hollywood",
  zipCode: 80085,
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

// #MARK: Exercise 2
// Initialize an Address Object using a Factory and Constructor Function

function factoryFunctionAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let factoryAddress = factoryFunctionAddress(
  "sesame street",
  "hollywood",
  80085
);
console.log(factoryAddress);

function ConstructorAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let constructorAddress = new ConstructorAddress(
  "sesame street",
  "hollywood",
  80085
);
console.log(constructorAddress);

// #MARK: Exercise 3:
// Using the constructor function above, create a second address
// Create a function areEqual(address1, address2) that checks the keys and values, returns true/false
// Create a function areSame(address1, address2) that checks if they are referencing the same object.

let address1 = new ConstructorAddress("sesame street", "hollywood", 80085);
let address2 = new ConstructorAddress("sesame street", "hollywood", 80085);
let address3 = new ConstructorAddress("sesame streets", "hollywoods", 800855);
let address4 = address1;

function areEqual(address1, address2) {
  isEqual = true;
  for (let key in address1) {
    if (address1[key] !== address2[key]) return false;
  }
  return true;
}

console.log("1 and 2 are Equal? ", areEqual(address1, address2));
console.log("1 and 3 are Equal? ", areEqual(address1, address3));

function areSame(address1, address2) {
  return address1 === address2 ? true : false;
}

console.log("1 and 2 are Same? ", areSame(address1, address2));
console.log("1 and 4 are Same? ", areSame(address1, address4));

// #MARK: Exercise 4
// Create a block post object with:
// title, body, author, view
// comments {author, body}
// isLive (true/false)

let blogPost = {
  title: "title",
  body: "lorem20",
  author: "mike",
  view: 10000,
  comments: {
    author: "Mike",
    body: "lorem10",
  },
  isLive: true,
};

// #MARK: Exercise 5
// Create a constructor function to create a blogPost

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}

// #MARK: Exercise 6
// Create a stopwatch object
const sw = new Stopwatch();
// 4 properties, duration, start, stop, reset
// default duration is 0
// you cannot call start twice
// you cannot call stop twice
// stopping then starting again continues the timer
// reset changes duration to 0

function Stopwatch() {
  let startTime = 0;
  let endTime = 0;
  let hasStarted = false;
  let hasStopped = false;
  let runningTime = 0;
  this.duration = function () {
    if (runningTime === 0 && startTime === 0)
      throw new Error("You have not started the stopwatch");
    hasStarted
      ? logCommand(`${(Date.now() - startTime + runningTime) / 1000} seconds.`)
      : logCommand(`${runningTime / 1000} seconds.`);
  };

  this.start = function () {
    if (hasStarted) throw new Error("You have already started the stopwatch");
    hasStarted = true;
    hasStopped = false;
    startTime = Date.now();
    logCommand("Stopwatch Started");
  };

  this.stop = function () {
    if (!hasStarted) throw new Error("You have not started the stopwatch");
    if (hasStopped) throw new Error("You have already stopped the stopwatch");
    hasStarted = false;
    hasStopped = true;
    endTime = Date.now();
    runningTime += Date.now() - startTime;
    logCommand("Stopwatch Stopped");
  };

  this.reset = function () {
    startTime = 0;
    endTime = 0;
    runningTime = 0;
    hasStarted = false;
    hasStopped = false;
    logCommand("Stopwatch Reset");
  };

  let logCommand = function (value) {
    console.log(value);
  };
}
