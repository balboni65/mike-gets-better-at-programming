// #MARK: Built-In Types

// JavaScript:     | TypeScript
// string          | any
// boolean         | unknown
// null            | never
// undefined       | enum
// object          | tuple
// number

// Infers type
let sales: number = 123_456_789;
let sales2 = 123_456_789;
let course: string = "TypeScript";
let course2 = "TypeScript";
let is_published: boolean = true;
let is_published2 = true;

// #MARK: Any type

let level; // any
// lose the benefit of using typescript, as it adds strict typing

// Throws error, as we haven't defined the type of "document"
// function render(document) {
function render(document: any) {
  console.log(document);
}

// if you want to disable this error, go to tsconfig.json
// go to "noImplicitAny": true
// set it to false, and the error will go away

// #MARK: Arrays

// JavaScript
let numbersJS = [1, true, "3"];
let numbersTS: number[] = [1, 2, 3]; // have to be the same type
// remember that type is inferred
let numberTS2 = [1, 2, 3]; // don't need ": number[]"

let numberTSAny = []; //any[]
// can then do [1, true, "3"] etc.

// When you get to n. hit ctrl + space, you can see all available options
numbersTS.forEach((n) => n.valueOf());

// #MARK: Tuples

// id, name => 1,'Mike'

let user: [number, string] = [1, "Mike"];
// if we add a third element, or change the type, we get an error
// let user: [number, string] = [1, "Mike", "error"]; (error)
// let user: [number, string] = ["Mike", 1]; (error)

user[0]; //"." ctrl + space shows all the options for number methods
user[1]; //"." ctrl + space shows all the options for string methods

// In JavaScript, this compiles to:
// let user = [1, 'Mike'];

// tuples are useful for dealing with 2 values

// #MARK: Enums
// list of related constants

const small = 1;
const medium = 2;
const large = 3;

// PascalCase
enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}

enum Order {
  Small,
  Medium,
  Large,
}
// Defaults values to 0,1,2

enum Order2 {
  Small = 2,
  Medium,
  Large,
}
// Defaults values to 2,3,4

// Setting a value from an Enum
let mySize: Size = Size.Large; //"l"

// Compiler translates this to a complicated function
// If we set the enum to a constant instead, it just sets the variable value.

const enum TestSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let myOtherSize: TestSize = TestSize.Large;
// Compiler writes this as:
//   let myOtherrSize = "l"

// #MARK: Functions

// Return type is inferred as void by default
function calculateStax(income: number) {
  return 0; // return type is inferred as number
}

// We should define a return type

function calculateShax(income: number): number {
  // By adding :number to the function, we now HAVE to return the value
  // We will get a compiler error if we return anything else but a number
  return 0;
}

// here we don't use income, we should be warned about this
// go to tsconfig.json and search for:
//   "noUnusedParameters": true
// uncomment it, this will give a warning on unused parameters

function calculateSnax(income: number): number {
  if (income < 50_000) return income * 1.2;
  // we get an error here because the function will return undefined if the condition is not met
  // thus we have to include a return of the specified type for every "path"
  return 0;
}

// we can check for these errors when we don't specify a type
// go to tsconfig.json and search for:
//   "noImplicitReturns": true,
// uncomment it

// this function now shows a warning
// "not all code paths return a value"
function calculateTix(income: number) {
  if (income < 50_000) return income * 1.2;
}

// there is one more setting for finding unused variables
function calculateStix(income: number) {
  let x; // unused
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}

// go to tsconfig.json and search for:
//   "noUnusedLocals": true,
// uncomment, will make variables of any kind a warning if not used.
// "let x;" now shows a warning

// In JavaScript we could call that function like this without problems
// calculateTax(1, 2, 3, 4, 5);
// in TypeScript, we have to match the number of parameters and type exaclty as defined
calculateStix(1);

// You can make a property optional by adding a "?"
// function calculateTax(income: number, taxYear?: number) {
function calculateTax(income: number, taxYear = 2022) {
  // you will get an error: "taxYear is possibly undefined"
  // you need to supply a default value
  // old way in JS "(taxYear || 2022)"
  // instead we give it a default value
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// RECAP:
// Add the following to tsconfig.json
// "noUnusedLocals"
// "noUnusedParameters"
// "noImplicitReturns"

// #MARK: Objects

let employee = { id: 1 };
// in javascript, objects are dynamic, so their shape can change over the lifetime of the program
// employee.name = 'Mike';
// ^ this is valid in JS, but not valid in TS
//  - Error: "Property 'name' does not exist on type '{id: number; }'."

// We can define the structure like this:
let employee2: {
  id: number;
  name?: string;
  // } = { id: 1 };
} = { id: 1 };
// if we don't include both an id and a name, it will throw an error
// either set the property to an empty value, or make it optional.
// don't do optional "?" things in typescript

// Read only:

let employee3: {
  readonly id: number;
  name: string;
} = { id: 1, name: "Mike" };
// now we can't do:
//  - "employee3.id = 0;"
// this will throw an error

// Adding functions to objects
// methodName: (property: Type) => returnType;
let employee4: {
  readonly id: number;
  name: string;
  // method decleration
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mike",
  // object method
  retire: (date: Date) => {
    console.log(date);
  },
};

// #MARK: Type Aliases
// if we want to create another employee4 object, we need to copy the type definitions again
// also code is very busy

// set the types here instead
type Workers = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let worker1: Workers = {
  id: 1,
  name: "Mike",
  retire: (date: Date) => {
    console.log(date);
  },
};
let worker2: Workers = {
  id: 1,
  name: "Mike",
  retire: (date: Date) => {
    console.log(date);
  },
};

// #MARK: Union Types

// Union type, "weight" can be either type
function kgToLbs(weight: number | string): number {
  // when we do "weight. ctrl + space"
  // we don't see all the number methods, or all the string methods
  // we only see the methods that apply to both as it doesn't know what type it is
  //
  // Narrowing
  //  - take a variable of multiple types, and figure out its type

  if (typeof weight === "number") {
    // compiler reads the logic, and knows that "weight" must be a number in this code block
    //   so if you do "weight. ctrl + space"
    //   you get the number method options

    return weight * 2.2;
  } else {
    // compiler reads the logic, and knows that "weight" must be a string in this code block
    //   so if you do "weight. ctrl + space"
    //   you get the string method options

    return parseInt(weight) * 2.2; // parses string to int
  }
}

// Both work
kgToLbs(1);
kgToLbs("10kg");

// #MARK: Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Intersection Type
type UIWidget = Draggable & Resizable;

// When intersecting types, you have to define the properties for all
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// #MARK: Literal Types

let quantity: number; // can either be exactly 50 or 100
// Literal (exact, speciic)
let quantityFixed: 50 = 50; // setting it to 51 makes it throw an error
let quantityFixed2: 50 | 100; // setting it to 51 makes it throw an error

// quantityFixed2 = 99 (Throws Error)
quantityFixed2 = 50;

// we can instead make a custom type for it

type Quantity = 50 | 100;
let quantityFixed3: Quantity;

// quantityFixed3 = 99 (Throws Error)
quantityFixed3 = 100;

// literal types can be any time, string etc...

// #MARK: Nullable Types

function greet(name: string) {
  console.log(name.toUpperCase());
}

// in JavaScript, we could call the funciton with null or undefined without problems
// in TypeScript, we cannot
// greet(null); ERROR: "Argument of type 'null' is not assignable to parameter of type 'string'"

// this comes from tsconfig.json
// property is: "strictNullChecks": true
//  - enabled by default when "strict": true

// New function to account for null or undefined "name"
function greeter(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("You done goofed");
}
greeter(null);
// greeter(undefined); still can't be passed because we haven't added " | undefined"

// #MARK: Optional Chaining

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// console.log(customer.birthday);
//  - compilation error as customer may be null
//  - could do the normal if/else to fix this
//  - but if we add undefined, we'd have to keep checking more things

// Optional property access operator (?)
console.log(customer?.birthday); // this code only gets executed if not null or undefined
// Keep in mind the "." dot operator is also called the "chaining operator"

// Optional element access operator
// customers[0]
// if the array is undefined/null, we have to check with if/else
// customers?.[0]
//  - add a "?."

// Optional call
let log: any = (message: string) => console.log(message);
let log2: any = null;
log("a");
log2?.("a"); // executed only if log2 references an actual function

// #MARK: The Nullish Coaelscing Operator

let speed: number | null = null;
// let ride = {speed: speed || 30} js version

// Falsy Values:
// JavaScript  | TypeScript
//   undefined
//   null
//   ''
//   false
//   0

// if speed is 0, while its a valid value, it will fail the logic check and default to 30
// to get around this we could check for null
let ride = { speed: speed !== null ? speed : 30 };
// however we would then need to check for undefined

// In TypeScript we have another way (Nullish Coalescing Operator)
let betterRide = { speed: speed ?? 30 };
//  - Called "nullish" because it could be "null" or "undefined"

// #MARK: Type Assertions

// In JS we have:
// document.getElementById()
//  - this returns an HTMLElement | null

let phone = document.getElementById("phone"); // lets say element is found
// HTMLElement is a prototype, has a "value" property

// phone.value (doing ctrl+space, shows no valid options)

// in this case, we know more about the type of the object than the compiler does
// we can define the type of the response in the assignment
let email = document.getElementById("email") as HTMLInputElement;
email.value;
// Doing "email. ctrl+space" we can see all the properties

// "as" does not convert the type of the value, it just informs the compiler
// so if this returns a string, it will still just be a string, not an HTMLInputElement

// another way:
let button = <HTMLInputElement>document.getElementById("button");

//#MARK: The unknown Type

// for situations where we NEED the any type
function rendering(document: any) {
  document.move();
  document.fly();
  document.whateverWeWant();
  // NO TYPE CHECKING
}

// Instead, set to unknown
function slendering(document: unknown) {
  // these now all throw errors:
  //   document.move();
  //   document.fly();
  //   document.whateverWeWant();
  //
  // Instead we need to use Narrowing, to deal with different types
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // This only works for primatives
  // for custom objects we have to use "instaceOf"
  //   if (document instanceof Workers) {
  //   }
}

// #MARK: The never Type

function processEvents() {
  while (true) {
    // read a message from a queue
  }
}

processEvents(); // call infinite loop
console.log("Hello World"); // never is called as the loop never returned

function processEventsNever(): never {
  while (true) {
    // read a message from a queue
  }
}

processEventsNever(); // call infinite loop

// Notice how this is all greyed out
// Can be toggled with "allowUnreachableCode": false;
console.log("Hello World"); // now throws warning

// if we take out ": never"
// this code is compiled as reachable even though its not, this is because TypeScript
//   sets the default return type to "void" instead of "never"
