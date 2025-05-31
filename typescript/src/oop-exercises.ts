// #MARK: Exercise 1

// Define a class called Logger that takes the name of a file in its constructor and provides
//   a method for writing messages to that file. Don’t worry about the actual file I/O
//   operations. Just define the class with the right members.

class Logger {
  constructor(public fileName: string) {}
  write() {
    console.log("write");
  }
}

// #MARK: Exercise 2

// Given the Person class below, create a getter for getting the full name of a person.
//  class Person {
//    constructor(public firstName: string, public lastName: string) {}
//  }

class Person3 {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// #MARK: Exercise 3

// Create a new class called Employee that extends Person and adds a new property called salary.
class Employee extends Person3 {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// #MARK: Exercise 4

// What is the difference between private and protected members?
//  - Protected members are inherited and used by their children
//  - This means you can do this.method(), rather than super('method')

// #MARK: Exercise 5

// Given the data below, define an interrface for representing employees:
// let employee = {
//   name: "John Smith",
//   salary: 50_000,
//   address: {
//     street: "Flinders st",
//     city: "Melbourne",
//     zipCode: 3144,
//   },
// };

interface IEmployee {
  name: string;
  salary: number;
  address: IAddress;
}

interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}
