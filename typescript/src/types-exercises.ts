// #MARK: Exercise 1
// Given the data below, define a type alias for representing users.
let users = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

// Solution

type Users = {
  name: string;
  age: number;
  occupation?: string;
};

let superUsers: Users[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

// #MARK: Exercise 2
// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Fly = {
  fly: () => void;
};
type Swim = {
  swim: () => void;
};

let fish: Swim = { swim: () => {} };
let bird: Fly = { fly: () => {} };
let pet: Swim & Fly = { swim: () => {}, fly: () => {} };

// #MARK: Exercise 3
// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thrusday"
  | "Saturday"
  | "Sunday";

// * I added this one *
// Define an enum for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
const enum Days {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

// #MARK: Exercise 4
// Simplify the following code snippets:

// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);

// My Solution:
// console.log(user?.address?.street)

// let x = foo !== null && foo !== undefined ? foo : bar();

// My Solution:
// let x = foo ?? bar();

// #MARK: Exercise 5

// What is the problem in this piece of code?
// let value: unknown = 'a';
// console.log(value.toUpperCase());

// My Solution:
// You cannot do a toUpperCase() Operation on an "unknown" type
// Even though you set the value to 'a', its type is still unknown, and thus could have any value
// You would need to do Narrowing to get its type
