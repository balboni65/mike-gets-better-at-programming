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
