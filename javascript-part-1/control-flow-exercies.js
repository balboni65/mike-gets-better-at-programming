// #MARK: Exercise 1
// Max of 2 numbers
console.log(maxNumber(10, 20)); // 20

function maxNumber(x, y) {
  return x > y ? x : y;
}

// #MARK: Exercise 2
// Given dimensions, determine if its landscape
height = 200;
width = 100;
console.log(isLandscape(width, height));
function isLandscape(width, height) {
  return width >= height;
}

// #MARK: Exercise 3
// Write the fizzBuzz function
// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by 3 adn 5 => FizzBuzz
// not divisible by 3 or 5 => Input
// not a number => 'Not a number'
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(4));
console.log(fizzBuzz(null));
console.log(fizzBuzz(true));

function fizzBuzz(input) {
  let result = "";
  // Check if input is valid
  if (typeof input !== "number") return "Not a number";

  // Check if input is divisible by 3 or 5
  if (input % 3 === 0) result += "Fizz";
  if (input % 5 === 0) result += "Buzz";

  // If it isn't divisible by either, return the input
  return result ? result : input;
}
// Ended up being better than the instructors solution :)

// #MARK: Exercise 4
// Write a funciton that takes a speedlimit and shows the following output
// Speed Limit = 70
// under speed limit => 'Ok'
// for every 5 over, get 1 point => Points: 1
// More than 12 points => 'License supsended'
console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(71));
console.log(checkSpeed(75));
console.log(checkSpeed(85));
console.log(checkSpeed(134));
console.log(checkSpeed(135));
console.log(checkSpeed("test"));
console.log(checkSpeed(null));
console.log(checkSpeed(134.999));

function checkSpeed(speed) {
  let speedLimit = 70;
  let surplus = speed - speedLimit;
  if (typeof speed !== "number") return "Not a number";
  if (surplus < 5) return "Ok";
  else {
    points = surplus / 5; // For every 5 miles
    points = points - (points % 1); // Removes trailing digits to make it a whole number
    if (points > 12) return "License Suspended";
    else return "Points: " + points;
  }
}

// #MARK: Exercise 5
// Write a function that takes a number, and displays all of its numbers stating if its even or odd
// 3 => 0 "EVEN" 1 "ODD" 2 "EVEN" 3 "ODD"

showNumbers(10);

function showNumbers(input) {
  if (typeof input !== "number") return "Not a number";
  for (let i = 0; i < input + 1; i++) {
    console.log(i % 2 === 0 ? i + " EVEN" : i + " ODD");
  }
}

// #MARK: Exercise 6
// Write a function that takes an array, and returns the number of truthy elements in the array
array = [
  "",
  "1",
  1,
  0,
  null,
  undefined,
  [],
  [3],
  { test: "test" },
  true,
  false,
];
console.log(countTruthy(array));

function countTruthy(array) {
  counter = 0;
  for (let index of array) {
    if (index) counter++;
  }
  return counter;
}
// Returns 6

// #MARK: Exercise 7
// Create a function that displays all the object properties that are a string
const movie = {
  title: "jaws",
  releaseYear: 1975,
  rating: 97,
  director: "Steve",
};
showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

// #MARK: Exercise 8
// create a function that takes a limit then returns the sum of all multiples of 3 and 5

console.log(sumThreeAndFive(5));
console.log(sumThreeAndFive(10));
console.log(sumThreeAndFive(15));
console.log(sumThreeAndFive(50));
console.log(sumThreeAndFive(100));

function sumThreeAndFive(limit) {
  sum = 0;
  for (let i = 0; i < limit + 1; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

// #MARK: Exercise 9
// Create a function that calculates the grade of a student
// Takes an array and takes the average
// const marks = [80, 80, 50];
// <59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade([50, 50, 60])); // F
console.log(calculateGrade([60, 60, 70])); // D
console.log(calculateGrade([70, 70, 80])); // C
console.log(calculateGrade([80, 80, 90])); // B
console.log(calculateGrade([90, 90, 90])); // A

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let average = sum / marks.length;

  if (average < 60) return "F";
  else if (average < 70) return "D";
  else if (average < 80) return "C";
  else if (average < 90) return "B";
  else return "A";
}

// #MARK: Exercise 10
// Write a function that displays "*" a number of times equal to the value passed, and each row has 1 more starting at one
// *
// **
// ***

showStars(10);

function showStars(input) {
  for (let i = 1; i < input + 1; i++) {
    // console.log("*" * i); Only works in Python
    stars = "";
    for (let x = 1; x <= i; x++) stars += "*";
    console.log(stars);
  }
}

// #MARK: Exercise 11
// Write a function that shows all the prime numbers of a given number
showPrimes(1);
showPrimes(6);
showPrimes(10);
showPrimes(20);
showPrimes(30);

function showPrimes(input) {
  for (let number = 2; number <= input; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
