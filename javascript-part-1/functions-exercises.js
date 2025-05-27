// #MARK: Exercise 1
// Write the sum(1,2,3,4) function that takes a variable number of arguments and adds them all together.

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1)); // 1
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 3, 54, 6, 65, 4)); // 133

// #MARK: Exercise 2
// Write an object with 2 properties, radius, area
// radius should be read/write
// area should be read only

const myCircle = {
  radius: 2,
  set circleRadius(value) {
    this.radius = value;
  },
  get circleArea() {
    return this.radius ** 2 * Math.PI;
  },
};
console.log(myCircle.circleArea);
myCircle.radius = 10;

console.log(myCircle.circleArea);

// #MARK: Exercise 3:
// Add error handling to the following code:

const numbers1 = [1, 2, 3, 4];

const count1 = countOccurrences1(numbers1, 1);
console.log(count1);

function countOccurrrences1(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

// Solution

const numbers = "test";

try {
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Not an Array");
  }
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
