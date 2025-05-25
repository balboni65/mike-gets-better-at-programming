//if...else
if (condition) statement;

// need {} if multiline
if (condition) {
  statement;
  statement;
} else if (condition) {
  statement;
} else {
  statement;
}

//switch
let role;
switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}

// loops
// for, while, do...while, for...in, for...of
for (initialExpression; condition; incrementExpression) {
  statement;
}

// i stands for index, its the (loop variable)
// the loop will execute as long as the condition continues to be true
// the loop needs an exit condition, incrementExpression moves it towards an exit condition
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

//while
let i = 0;
while (i < 5) {
  console.log("Hello World");
  i++;
}

// do...while (always executes at least once)
i = 0;
do {
  console.log("Hello World");
  i++;
} while (i < 5);

// for...in (used for objects)
const person = {
  name: "Mike",
  age: 26,
};

for (let key in person) {
  console.log(key, person[key]); // key is the property name
  // name Mike
  // age 26
}

// For...of (used for arrays)
let colors = ["red", "blue", "green"];
for (let color of colors) {
  console.log(color); // index is the index of the array
  // 0 red
  // 1 blue
  // 2 green
}

// Break and Continue
i = 0;
while (i < -10) {
  if (i === 5) break; // displays the first 5 numbers

  console.log(i);
  i++;
}
while (i < -10) {
  if (i % 2 === 0) continue; // skips even numbers
  // displays odd numbers
  console.log(i);
  i++;
}
