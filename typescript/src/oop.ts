// #MARK: OOP Again
// |        Object         |
// |      Data (State)     | Properties
// | Operations (Behavior) | Methods
//
// Objects should only be responsible for a single task

// #MARK: Class
//  - A Class is a Blueprint for creating objects

// PasCal Case
class Account {
  // In classes you must initialize all properties
  //  - You cannot just do "id: number"

  id: number;
  owner: string;
  balance: number;
  // These properties don't exist in JS, only in TS

  // Always returns an instance of the object (Account), so you cannot give it a return type
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  // The properties are now initialized
  // You would call this object, with the construct arguments as parameters

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

// #MARK: Creating Objects

let account = new Account(69, "Mike", 69_000);
// account. ctrl + space shows all the members of the object
account.deposit(420);
console.log(account.balance); // 69_420
console.log(typeof account); // Object
// "instanceof" is a boolean expression like === or ||
console.log(account instanceof Account); // true

// #MARK: Read Only and Optional Properties

class BankAccount {
  // read only, can only be set within the "constructor()"
  readonly id: number;
  owner: string;
  balance: number;
  // optional, just add a "?" at the end
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
    // Cannot access id in this method
  }
}
let bankAccount = new BankAccount(69, "Mike", 69_000);
// PROBLEM: we can manually do the following
bankAccount.balance = 0;
// We can't make this property ready only, because we wouldn't be able to use it in "deposit()"

// #MARK: Access Control Keywords

// Access Modifiers
//  - public
//  - private
//  - protected

class DrankAccount {
  readonly id: number;

  // All of these properties are "public" by default
  owner: string;
  nickname?: string;

  // Making this "private", can be accessed from this object, but not outside
  // By convention, prefix with an underscore
  private _balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount - this.calculateTax(amount);
  }

  // Getting a private property
  getBalance(): number {
    return this._balance;
  }

  // Private Method: only used within the object
  private calculateTax(value: number): number {
    return value * 0.07;
  }
}
let drankAccount = new DrankAccount(69, "Mike", 69_000);
// drankAccount.balance (not an option anymore)
// If we wanted to get the balance, we need to add a method for it
console.log(drankAccount.getBalance()); // 69_000

// We can also make methods private

// drankAccount.calculateTax (Doesn't show)

// #MARK: Param Properties, Get and Set

class CrankAccount {
  // We can define the variable, and initialize it by adding a prefix in the constructor
  constructor(
    // Parameter Properties
    public readonly id: number,
    private _owner: string,
    private _balance: number
  ) {}
  // We also don't need to do this.id = id, its automatic

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount - this.calculateTax(amount);
  }
  // New way to get the value, makes it readonly
  get balance(): number {
    return this._balance;
  }

  // New way to set the value
  set owner(value: string) {
    this._owner = value;
  }

  // Private Method: only used within the object
  private calculateTax(value: number): number {
    return value * 0.07;
  }
}
let crankAccount = new CrankAccount(69, "Mike", 69_000);
crankAccount.balance; // 69_000
// crankAccount.balance = 0 (Throws Error)
crankAccount.owner = "john";
console.log(crankAccount.owner); // Throws Error, cannot "get"

// #MARK: Index Signatures

// class for every person's seat
class SeatAssignment {
  // A1, A2, ...
  // Mike, John, ...

  // don't want to do "a1: string, a2: string...

  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "mike";
seats.A2 = "John";
seats["A3"] = "Identical";

// #MARK: Static Members

class Ride {
  // passenger
  // pickupLocation
  // dropOffLocaiton

  activeRides: number = 0;

  start() {
    this.activeRides++;
  }

  stop() {
    this.activeRides--;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(ride1.activeRides); // 1
console.log(ride2.activeRides); // 1

// Each object is independent of the other
// Thats why the number of active rides is 1 for both, instead of 2

// We can solve this by using "static" so there is only 1 instance, for all object instances

class Lift {
  // This is now the same for all instances of the class
  // Value now belongs to the Lift class, instead of the lift object
  static activeRides: number = 0;

  // Now throws an error
  // Property 'activeRides' does not exist on type 'Lift'. Did you mean to access the static member 'Lift.activeRides' instead?
  // start() {
  //   this.activeRides++;
  // }
  start() {
    // Replace "this" with "Lift"
    Lift.activeRides++;
  }

  stop() {
    Lift.activeRides--;
  }
}

let ride3 = new Lift();
ride3.start();

let ride4 = new Lift();
ride4.start();

// Change the call as well
console.log(Lift.activeRides); // 2

// We still can set the value
Lift.activeRides = 10; // valid but shouldn't be able to do it

//  to fix:
class Heft {
  // make this private
  private static _activeRides: number = 0;
  start() {
    Heft._activeRides++;
  }

  stop() {
    Heft._activeRides--;
  }

  // Just doing "get activeRides()" will fail since it refers to the instance of the object
  // Must instead add static as well, to refer to the class
  static get activeRides() {
    return Heft._activeRides;
  }
}

let ride5 = new Heft();
ride5.start();

let ride6 = new Heft();
ride6.start();

// Can no longer do "Heft.activeRides = 10"
console.log(Heft.activeRides); // 2

// #MARK: Inheritance

// "Student" and "Teacher" inherit from the "person" class

class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  // You get an error here: "Constructors that extend must contain a super call"
  // So we have to add super, as well as add the parent's parameters (firstName, lastName)
  constructor(public studentId: number, firstName: string, lastName: string) {
    // ^ firstName and lastName are only used for the super call, we don't need to make them public or private
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

let student = new Student(69, "Mike", "Dorn");
// student. ctrl + space
//   firstName
//   fullName
//   lastName
//   studentId
//   takeTest
//   walk

// #Mark: Method Overriding
// Method Overriding means changing its implementation

class Teacher2 extends Person {
  // don't want extra properties, don't need to define its own constructor
}
let teacher2 = new Teacher2("Big", "Man"); // Still need to provide parent parameters
console.log(teacher2.fullName); // Big Man

// We want to prefix this method to append "teacher"

class Teacher extends Person {
  // use override keyword
  override get fullName() {
    // return "Professor " + this.firstName + " " + this.lastName;
    //  - we've already implemented this code before, instead do this:
    return "professor " + super.fullName;
  }
  // ^ if you don't include override, it will use this one instead, but you will lose access to the parent function
  //  - We can enable a tsconfig.json rule to address this
  //  - "noImplicitOverride": true,
}
let teacher = new Teacher("Big", "Man"); // Still need to provide parent parameters
console.log(teacher.fullName); // Professor Big Man

// #MARK: Polymorphism

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([new Student(1, "Mike", "Dorn"), new Teacher("Big", "Man")]);
// Mike Dorn
// Professor Big Man
//  - Different output depending on the type of person or person child class
//  - Polymorphism

// Open Closed Principle
// "Classes should be OPEN for EXTENSION"
//   "and CLOSED for MODIFICATION"

// #MARK: Private vs Protected Members
// private - can be accessed anywhere within the class
//  - cannot be called outside the object
// protected - same as private, however,
//  - protected members are inherited, private members are not

class Person2 {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Adding "protected"
  protected walk() {
    console.log("Walking");
  }
}
class Teacher3 extends Person2 {
  gradePaper() {
    this.walk; // You can access the method of the parent class without super
    console.log("graded");
  }
  // don't want extra properties, don't need to define its own constructor
}

// #MARK: Abstract Classes and Methods

class Shape {
  constructor(public color: string) {}
  // Not implemented, only in its children
  render() {}
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  // type "render" and hit "tab"
  // Generates this code: "override render(): void {}"
  override render(): void {
    console.log("Rendering a circle");
  }
}

let shape = new Shape("red");
shape.render(); // Cannot be executed, as "render()" isn't implemented for shape

// we can add "abstract" to a class
// This means that the class isn't standalone, and another class MUST extend it
abstract class ShapeAbstract {
  constructor(public color: string) {}
  // Not implemented, only in its children
  render() {}
}

// let shape = new Shape("red"); ERROR: Cannot create an instance of an abstract class
// Now you can't create instances of an Abstract class, its just a template to be followed by other classes

// We can also do this with methods
// However we can't have an implementation for the method, so we must remove the "{}"
abstract class MethodAbstract {
  constructor(public color: string) {}
  // Adding abstract requires you define a return type
  abstract render(): void;
}

// NOTE: Abstract methods can only exist in abstract functions
//  - If we remove the "abstact" from "abstract class MethodAbstract"
//  - we will get an error on "abstract render()"

// #MARK: Interfaces
//  - Used to define the shape of objects
// Creating a common class for various calendar services like google and outlook

abstract class Calendar {
  constructor(public name: string) {}

  // Implementation would be different between calendar services
  abstract addEvent(): void;
  abstract removeEvent(): void;
}

// Lets do this again with an Interface

// Some prefix with "I"
interface ICalendar {
  // Declerations only, you cannot initialize values
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
// ^ this is ts only, literally doesn't exist in js
// - Waits till you make an object with it and just defines values there

// You can extend these too
interface ICloudCalendar extends ICalendar {
  sync(): void;
}

// Instead of "extends" we use "implements"
class GoogleCalendar implements ICalendar {
  // You will get an Error, saying you're missing properties, have to implement all of them
  // TRICK: Click on "Googlecalendar"
  // Press: " ctrl + '.' "
  //  - This brings up the "quick fix" menu
  // Click: "Implement Interface"
  //  - Generates this:

  // name: string;
  // ^ convert the above generated code into a constructor
  constructor(public name: string) {}

  // Also generated
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

// NOTE: type and interface are interchangable
//  - You won't run into the differences between them, just use interface
