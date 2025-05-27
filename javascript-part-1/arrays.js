// #MARK: Adding Elements

const numbers = [3, 4];
// cannot do numbers=[];
// can modify the array
// Arrays are objects so you can do .notation
// Use .push, .unshift, .splice for adding elements after, before, middle of an array

numbers.push(5, 6); // Places at the end of the array [3,4,5,6]
numbers.unshift(1, 2); // Places at the beginning of the array [1,2,3,4,5,6]
numbers.splice(2, 0, 2.3, 2.5); // Index, What to Delete, values... [1,2,2.3,2.5,3,4,5,6]
numbers.push(1);

// #MARK: Finding Elements (Primitives)

// If the element exists in the array it will return the index, otherwise it returns -1
// Checks WHERE something exists
numbers.indexOf("a"); // -1
numbers.indexOf(1); // 0
numbers.indexOf("2"); // -1
numbers.lastIndexOf(1); // 8
numbers.indexOf(1, 2); // 8 (second property tells it which index to start at)

// Check IF something exists
numbers.includes(1); // true

// #MARK: Finding Elements (References)

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
// Cannot use Includes the way you want
console.log(courses.includes({ id: 1, name: "a" })); // false
// { id: 1, name: "a" } has a different reference in memory to "courses"

// FIND
// "course" is like using a variable in a loop
// "function(course)" is called a "predicate function"
const specificCourse = courses.find(function (course) {
  //expression that should return true/false
  course.name === "a";
});
console.log(specificCourse); // {id: 1, name: "a"}

// Fail to find example
const noCourse = courses.find(function (course) {
  course.name === "xyz";
});
console.log(noCourse); // undefined

// FIND INDEX
// find index example
const indexCourse = courses.findIndex(function (course) {
  course.name === "a";
});
console.log(indexCourse); // 0

// Fail to find index example
const noIndexCourse = courses.findIndex(function (course) {
  course.name === "xyz";
});
console.log(noIndexCourse); // -1
// Would return an index digit instead of its value

// #MARK: Arrow Functions

// instead of using the (function()) predicate
// just pass the parameters, must pass empty () if no parameters
const arrowCourse = courses.findIndex((course) => {
  course.name === "a";
});
// Can further shorten to:
const smallArrowCourse = courses.findIndex((course) => course.name === "a"); // Read as "course goes to course.name is equal to 'a'"
console.log(arrowCourse); // 0

// #MARK: Removing Elements

// use .pop,.shift,.splice to remove elements from an array

const newNumbers = [1, 2, 3, 4, 5];

// Remove the last element of an array
const lastElement = newNumbers.pop(); // Removes the last element and returns it
console.log(newNumbers); // [1,2,3,4]
console.log(lastElement); // 5

// Remove the first element of an arrray
const firstElement = newNumbers.shift(); // Removes the first element and returns it
console.log(newNumbers); // [2,3,4]
console.log(firstElement); // 1

// Remove the middle element of an array
const middleElement = newNumbers.splice(1, 2); // Go to index 1 (value of 3), remove the next 2 elements
console.log(newNumbers); // [2]
console.log(middleElement); // [3,4]
const oneElement = newNumbers.splice(0, 1); // Go to index 0 (value of 2), remove the next 1 element
console.log(newNumbers); // []
console.log(oneElement); // [2]

//.splice() always returns an array

// #MARK: Emptying an Array

// Empty through assignment
let emptyNumbers = [1, 2, 3, 4];
// Cannot be used if above is const
emptyNumbers = []; // []
// if emptyNumbers is not used again, it will be removed by the garbage collector

let continuingNumbers = [1, 2, 3, 4];
let anotherNumbers = continuingNumbers;
continuingNumbers = []; // Actually just updating the reference to a new array in mememory
// both variables no long reference the same thing.
console.log(continuingNumbers); // []
console.log(anotherNumbers); // [1,2,3,4]
// Still pointing to the old array in memory
// Solution only works if you don't have any other references to the array

// Empty through truncating
let truncateNumbers = [1, 2, 3, 4];
let anotherTruncate = truncateNumbers;

truncateNumbers.length = 0; // Modifies a property of the value, not the assignment of the value

console.log(truncateNumbers); // []
console.log(anotherTruncate); // [] Both still point to the same place in memory

// Empty through .splice()

let spliceNumbers = [1, 2, 3, 4];
let anotherSplice = spliceNumbers;

// Start at the first index, remove elements equal to the number of elements
spliceNumbers.splice(0, spliceNumbers.length);

console.log(spliceNumbers); // []
console.log(anotherSplice); // [] Both still point to the same place in memory

// Empty through .pop()
let popNumbers = [1, 2, 3, 4];
let anotherPop = popNumbers;

while (numbers.length > 0) numbers.pop();
// Performance cost with this solution on large arrays.

console.log(popNumbers); // []
console.log(anotherPop); // [] Both still point to the same place in memory

// #MARK: Combining and Slicing Arrays

// Concat
const first = [1, 2, 3];
const second = [4, 5, 6, 7];

const combined = first.concat(second); // returns a new value, doesn't affect the original.
console.log(combined); // [1,2,3,4,5,6,7]

// Slice

const slice1 = combined.slice(2, 4); // Passing a 0-based index starting and ending point
// Starting after index 2 ending after index 4
// [ 1 , 2 ,| 3 , 4 ,| 5 , 6 , 7 ]
console.log(slice1); // [3,4]

const slice2 = combined.slice(2); // Passing a 0-based index starting point (default end point is the remaining elements)
// Starting after index 2, ending after last index
// [ 1 , 2 ,| 3 , 4 , 5 , 6 , 7 |]
console.log(slice2); // [3,4,6,7]

const slice3 = combined.slice(); // Creates a copy of the array's values, does not copy the reference
// Starting before index 0, ending after last index
// [| 1 , 2 , 3 , 4 , 5 , 6 , 7 |]
console.log(slice3); // [1,2,3,4,5,6,7] (copied)

// Objects
const firstObjectArray = [{ id: 1 }];
const combindedObject = firstObjectArray.concat(second);
// The reference to the object in memory is copied, not the value

firstObjectArray[0].id = 10; // Changing obj

console.log(firstObjectArray); // [{id: 10}]
console.log(combindedObject); // [{id: 10}, 4, 5, 6, 7]
// The value was updated as well because it stores reference: [reference, 4, 5, 6, 7]

combindedObject[0].id = 15; // Changes the same obj

console.log(firstObjectArray); // [{id: 15}]
console.log(combindedObject); // [{id: 15}, 4, 5, 6, 7]

// #MARK: The Spread Operator

// Denoted by ... IN FRONT OF THE VARIABLE (NOT: first...second)
// Returns the individual elements, not an array itself

const spreadCombined = [...first, "new value", ...second]; // All of the elements of the first array with all the elements of the second array
// Same as: first.concat(second);
// This is useful as you can do it with more, [...first, ...second, ...third, ...fourth]

const copyCombined = [...spreadCombined];
// Same as: spreadCombined.slice()

// #MARK: Iterating an Array
const iterateNumbers = [1, 2, 3];

// for...of
for (let number of numbers) console.log(number); // 1 2 3

// Takes a callback function, the function() bit
numbers.forEach(function (number) {
  console.log(number);
});
numbers.forEach((number) => console.log(number));
// console.log(number) doesn't have a semicolon because its no longer in a code block {}

numbers.forEach((number, index) => console.log(index, number));
// 0 1
// 1 2
// 2 3

// #MARK: Joining Arrays

const joinNumbers = [1, 2, 3];
// Takes an optional seperator as a string
const joined = numbers.join("*");
console.log(joined); // 1*2*3

// split
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts); //["This", "is", "my", "first", "message"]

const combinedMessage = parts.join("_");
console.log(combinedMessage); //This_is_my_first_message
// useful for creating urls as you can't have spaces

// #MARK: Soring Arrays

const sortNumbers = [2, 3, 1];
// Converts each element to a string and then sorts the array
numbers.sort(); // [1, 2, 3]

numbers.reverse(); //[3, 2, 1]

const lectures = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript.js" },
];

lectures.sort(); // nothing will happen

lectures.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(lectures);
// [{id: 2, name: "JavaScript.js"}
//  {id: 1, name: "Node.js"}]

// if you change "JavaScript.js" to "javaScript.js"
// it will put "Node.js" first as capital "N" is > lowercase "j" in ascii code

// Account for Case
lectures.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// Now sorts "javascript" before "Node"

// further change to:
lectures.sort((obj1, obj2) => {
  const nameA = obj1.name.toUpperCase();
  const nameB = obj2.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// #MARK: Testing the Elements of an Array

const checkNumbers = [1, 2, 3];
// Pass a callback function (value: number, index: number, array)
const allPositive = numbers.every((value) => {
  return value >= 0; //Runs this code on every element in the array, returns true if positive, returns false if negative and stops.
  // Runs until a false condition
});

const atLeastOnePositive = numbers.some((value) => {
  return value >= 0; //Runs this code on every element in the array, returns true if anything is possible.
  // Runs until a true condition
});

// #MARK: Filtering an Array

const filterNumbers = [1, -1, 2, 3];

// Callback Function (Value: Number, Index: Number, Array)
// Produces a new array
// Shorted variable from number to n
const filtered = numbers.filter((n) => n >= 0);
console.log(filtered); // [1,2,3]

// #MARK: Mapping an Array

// Callback Function (Value: Number, Index: Number, Array)
const itemsMapped = filtered.map((n) => "<li>" + n + "</>");
console.log(itemsMapped); // ["<li>1</li>","<li>2</li>","<li>3</li>",]

let htmlMapped = itemsMapped.join();
console.log(htmlMapped); // "<li>1</li>,<li>2</li>,<li>3</li>"
// Includes commas by default

htmlMapped = "<ul>" + itemsMapped.join("") + "</ul>";
console.log(htmlMapped); // "<ul><li>1</li><li>2</li><li>3</li></ul>"
// Map can be used to map each element in an array into something else
// In this case mapped into strings
// Mapped into objects

const objMapped = filtered.map((n) => {
  // Cannot do just { value: n } b/c the curly braces are treated as a code block by default
  // So you have to have it in a code block already in order for it to work with object properties
  // you can fix this by putting it in parenthesis
  return { value: n };
});
// Equivalent to:
objMapped = filtered.map((n) => ({ value: n })); // Added parenthesis

console.log(objMapped);
// [{value: 1},
//  {value: 2},
//  {value: 3}]

// NOTE: these methods are chainable as they don't modify the original

const chainNumbers = [4, -1, 5, 6];
// Chaining
const chainItems = numbers // [4, -1, 5, 6]
  .filter((n) => n >= 0) // [4, 5, 6]
  .map((n) => ({ value: n })) // [{value: 4}, {value: 5}, {value: 6}]
  .filter((obj) => obj >= 5) // [{value: 5}, {value: 6}]
  .map((obj) => obj.value); // [5,6]

// #MARK: Reducing an Array

const reduceNumbers = [1, 2, 3, 4];

// Sum of all numbers
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum); // 10

// All arrays have .reduce()
// This function reduces all the elements in the array into a single value
// Could be a number, string etc.

// The Reduce Callback function has 2 parameters (callback function, initial value of accumulator)
// The callback function inside, has 2 more parameters (Accumulator, currentValue)
// Accumulator is basically the "sum" variable from above
// currentValue is each element in the array
// initial value of accumulator can be a string, number etc. in this case 0
let reduceSum = reduceNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// a = 0, c = 1 -> a = 1
// a = 1, c = 2 -> a = 3
// a = 3, c = 3 -> a = 6
// a = 6, c = 4 -> a = 10
console.log(reduceSum); // 10

// Shorten:
// You can exclude a default, it will set the initial value of the accumulator to the first element, and currentValue to the second element
let shortSum = reduceNumbers.reduce((a, c) => a + c);
// a = 1, c = 2 -> a = 3
// a = 3, c = 3 -> a = 6
// a = 6, c = 4 -> a = 10
console.log(shortSum); // 10
