// #MARK: What are Decorators?

// @Component | Only in Angular and View
class ProfileComponent2 {}

// Decorators are just functions
// When code is compiled, it calls that function, and passes our class to it

// NOTE: You need to turn decorators on in the tsconfig.json
// "experimentalDecorators": true

// #MARK: Class Decorators

// If we set the type to Function, the compiler assumes we are going to apply this to a class
function Component(constructor: Function) {
  // FYI, you can do "log + down arror + tab" and it cuts to "console.log"
  console.log("Component Decorator called");

  // A form of inheritance
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}
// When compiling, console logs "Component Decorator called" Because this code executes at compile time

// #MARK: Parameterized Decorators
// Passing arguments to Decorators

// Decorator Factory
function Component2(value: number) {
  // Have to put in another decorator function as the return value
  // Remove "function Component" and add a " => " before the {}
  return (constructor: Function) => {
    constructor.prototype.options = value; // Using value

    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

// Passing an object

type ComponentOptions = {
  selector: string;
};

function Component3(options: ComponentOptions) {
  return (constructor: Function) => {
    constructor.prototype.options = options; // Using object

    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

// Passing object as argument
@Component3({ selector: "#my-profile" })
class ProfileComponent3 {}

// #MARK: Decorator Composition

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component3({ selector: "#my-profile" })
@Pipe
class ProfileComponent4 {}
// Compile:
//  - "Pipe Decorator called"
//  - "Component Decorator called"

// These are called in reverse order
// This is because of how math functions work
// f(g(k(x)))
// k(x) is evaluated, then g(k), then f(g)

// #MARK: Method Decorators

class People {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

// This function will fully replace the function in the "People" class
function Replace(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // Keep in mind that "descriptor.value" is the unique Property
  descriptor.value = function () {
    console.log("New Implementation");
  };
}

function Log2(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // Store the original method
  const original = descriptor.value as Function; // add "as Function" to give type assertion to "any" type

  // Arguments are the same as the original function for this implementation
  descriptor.value = function (message: string) {
    console.log("Before");

    // Call the original method
    original.call(this, message); // Pass "this" context and argument we want to pass

    // original.call(this, " New Value ");
    // - This implementation would override whatever was passed to the original function

    console.log("After");
  };
}

// "target" and "methodName" are not used, throwing warnings
// we need to disable this in tsconfig.json
// turn this back off " "noUnusedParameters": true" "

// We can make this function more generic by using "any"

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;

  // change this to ...args: any
  descriptor.value = function (...args: any) {
    console.log("Before");

    // spread operator
    original.call(this, ...args);

    console.log("After");
  };
}

// Keep in mind we use "function" instead of " => "
// This is because we have to pass "this" when doing ".call"
// Arrow functions do not define their own context of "this" and thus won't work.

// #MARK: Accessor Decorators

class People2 {
  constructor(public firstName: string, public lastName: string) {}

  // New decorator, works the same for accessors as they do for methods
  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get as Function; // Reference to original getter

  // Getters cannot have arguments
  descriptor.get = function () {
    // Optional chaining "?" was added by default as getting the value may fail
    const result = original?.call(this); // "result" is a type of "any"
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

let people2 = new Person("mike", "dorn");
console.log(people2.fullName); // Mike Dorn

// #MARK: Property Decorators

class User {
  @MinLength(4) // Passwords are atleast 4 characters long
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

function MinLength(length: number) {
  // return a function again, but no propertyDescriptor
  return (target: any, propertyName: string) => {
    let value: string; // Used to move the values between get/set

    const descriptor: PropertyDescriptor = {
      // "ctrl + space" lets you see all the options of PropertyDescriptor objects

      get() {
        return value;
      },

      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters long.`
          );
        // If valid:
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

let user2 = new User("1234");
console.log(user2.password); // works

let user3 = new User("12");
console.log(user3.password); // ERROR

let user4 = new User("1234");
user4.password = "12";
console.log(user4.password); // ERROR

// #MARK: Parameter Decorators

class Vehicle {
  move(@Watch speed: number) {}
}

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

// Collecting metadata about the parameterr
function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

console.log(watchedParameters);
// [ { methodName: 'move', parameterIndex: 0 } ]

// #MARK: Exercise 1
// Create a decorator for radding a sauce to Pizza instances:
//  - all instances of the Pizza class should have a sauce property set to "pesto"

@Sauce("pesto")
class Pizza {}

// Solution:
function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  };
}
