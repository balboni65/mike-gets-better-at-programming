// #MARK: Exercise 1
// Create arrayFromRange(min, max)
// This creates an array with an integer value for every value between them

const numbers1 = arrayFromRange(1, 4);
console.log(numbers1);
const numbers2 = arrayFromRange(6, 15);
console.log(numbers2);

function arrayFromRange(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) array.push(i);
  return array;
}

// #MARK: Exercise 2
// Write a function that mimics .includes()
// includes(array, searchElement)

const includes1 = [1, 2, 3, 4];
const includes2 = ["1", "2", "3", "4"];
const includes3 = ["1", "2", 3, 4];

// Checks
console.log("Number found " + includes(includes1, 1));
console.log("Number Not found " + includes(includes1, 6));
console.log("String Not found " + includes(includes1, "1"));
console.log("String found " + includes(includes2, "1"));
console.log("String Not found " + includes(includes2, "6"));
console.log("Number Not found " + includes(includes2, 1));
console.log("Number found " + includes(includes3, 3));
console.log("Number Not found " + includes(includes3, 6));
console.log("String found " + includes(includes3, "1"));
console.log("String Not found " + includes(includes3, "6"));

function includes(array, searchElement) {
  for (let value of array) {
    if (value === searchElement) return true;
  }
  return false;
}

// #MARK: Exercise 3
// Write the except(array, excluded) function
// It should remove all the selected elements from another array

const numbers3 = [1, 2, 1, 3, 1, 2, 4];
const output = except(numbers3, [1, 2]);
console.log(output); // Should be [3,4]

// Works but shit
function except(array, excluded) {
  let newArray = [];
  let isExcluded = false;
  for (let value of array) {
    for (let exclusion of excluded) {
      if (value === exclusion) {
        isExcluded = true;
      }
    }
    if (isExcluded !== true) {
      newArray.push(value);
    }
    isExcluded = false;
  }
  return newArray;
}

// Better solution
function except2(array, excluded) {
  let newArray = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

// #MARK: Exercise 4
// Create the move(array, index, offset) function
// Should take a positive or negative value to move the element in the array
// Should use console.error('Invalid Offset');

const numbers4 = [1, 2, 3, 4];
const movedNumbers = move(numbers4, 1, -1);
console.log("movedNumbers", movedNumbers); // [2, 1, 3, 4]

function move(array, index, offset) {
  const position = index + offset;
  // Check if the index is in range
  if (position >= array.length || position < 0) {
    return console.error("Index Out of Range");
  }
  // Copy the old array
  newArray = [...array];
  // Remove the value from the array and store it
  let value = newArray.splice(index, 1)[0]; // can add [0] to return the value of the array
  // Add the value back in its new offset
  newArray.splice(position, 0, value);
  return newArray;
}

// #MARK: Exercise 5
// create the countOccurrences(array, searchElement) function

const numbers5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

const count0 = countOccurrences(numbers5, 0);
const count1 = countOccurrences(numbers5, 1);
const count2 = countOccurrences(numbers5, 2);
const count3 = countOccurrences(numbers5, 3);
const count4 = countOccurrences(numbers5, 4);

console.log(count0);
console.log(count1);
console.log(count2);
console.log(count3);
console.log(count4);

function countOccurrences(array, searchElement) {
  let counter = 0;
  for (let value of array) if (value === searchElement) counter++;
  return counter;
}

// Instructor Solution
function countOccurrences2(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

// #MARK: Exercise 6
// create the getMax(array) function

const numbers6 = [1, 2, 3, 4];
const max = getMax(numbers6);
console.log(max);

// Normal logic
function getMax(array) {
  let highestValue;
  for (let value of array)
    if (value > highestValue || highestValue === undefined)
      highestValue = value;
  return highestValue;
}

const max2 = getMax(numbers6);
console.log(max2);

// Reduce
function getMax2(array) {
  return array.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });
}

// #MARK: Exercise 7

const movies = [
  { title: "a", year: 2025, rating: 4.5 },
  { title: "b", year: 2025, rating: 4.7 },
  { title: "c", year: 2025, rating: 3 },
  { title: "d", year: 2024, rating: 4.5 },
];

// Write code that gets all the movies from 2025 with ratings > 4
// Sort them by their rating in descending order
// Display their titles in that order
// 'b' 'a'

filterMovies(movies);

// First attempt
function filterMovies(movies) {
  //if movie.includes 2025 || mov
  let filteredMovies = [];

  // Selects movies with the following properties
  for (let movie of movies) {
    if (movie.year === 2025 && movie.rating > 4) {
      filteredMovies.push(movie);
    }
  }
  // Sorts by rating
  filteredMovies.sort((a, b) => {
    if (a.rating > b.rating) return 1;
    if (a.rating < b.rating) return -1;
    return 0;
  });
  // Displays titles in order
  for (let movie of filteredMovies) {
    console.log(movie.title);
  }
}

// Instructor Solution
const movies2 = [
  { title: "a", year: 2025, rating: 4.5 },
  { title: "b", year: 2025, rating: 4.7 },
  { title: "c", year: 2025, rating: 3 },
  { title: "d", year: 2024, rating: 4.5 },
];

filterMovies2(movies2);

function filterMovies2(movies) {
  console.log(
    movies
      .filter((movie) => movie.year === 2025 && movie.rating > 4)
      .sort((a, b) => a.rating - b.rating)
      .reverse()
      .map((movie) => movie.title)
  );
}

// optimized solution
const movies3 = [
  { title: "a", year: 2025, rating: 4.5 },
  { title: "b", year: 2025, rating: 4.7 },
  { title: "c", year: 2025, rating: 3 },
  { title: "d", year: 2024, rating: 4.5 },
];

filterMovies3(movies3);

function filterMovies3(movies) {
  console.log(
    movies
      .filter((movie) => movie.year === 2025 && movie.rating > 4)
      .sort((a, b) => b.rating - a.rating) // Descending Order
      .map((movie) => movie.title)
  );
}
