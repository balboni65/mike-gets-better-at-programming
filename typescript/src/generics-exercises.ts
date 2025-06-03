// #MARK: Exercise 1
// Convert the function below to a generic function:
// function echo(arg) { return arg; }

// Solution
function echo(arg: unknown) {
  return arg;
}
// Instructor solution
function echo3<T>(arg: T): T {
  return arg;
}
// This creates a generic, uses it as the property, and sets the return type.

// #MARK: Exercise 2
// When compiling the following piece of code, we get an error saying ‘Property name
//   does not exist on type T’. How can we solve this problem?
// function printName<T>(obj: T) {
// console.log(obj.name);
// }

// Solution
// We need to apply a constraint on the generric type parameter so the
//   TypeScript compiler knows that objects of type T have a name property
function printName<T extends { name: string }>(obj: T) {
  // Adding extends
  console.log(obj.name);
}

// #MARK: Exercise 3
// An Entity should have a unique identifier. The type of identifier, however, is dependent
//   on the use case. In some cases, the ID might be a number, in other cases, it might be a
//   string, GUID, etc. Represent the entity using a generic class.

// Solution
class Entity<T> {
  constructor(public id: T) {}
}

// #MARK: Exercise 4
// Given the following interface, what does "keyof User" return?
interface User {
  userId: number;
  username: string;
}

// solution
// It returns a union of the properties of User: ‘userId’ | ‘username’