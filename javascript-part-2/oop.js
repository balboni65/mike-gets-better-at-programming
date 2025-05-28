// #MARK: OOP
// Object oriented programming is a paradigm(style) centered around objects rather than functions
// Not a language or a tool
// C# Java Ruby Python JavaScript etc.

// #MARK: 4 Pillars of Object-oriented Programming

// #MARK: Encapsulation
//      In OOP, we combine/group related functions and variables into a unit known as an Object
//          - Reduces Complexity
//          - Increases Reusability

//      Variables are properties
//      Functions are methods

let baseSalary = 30_000; // 30,000
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}

// ^ This impelementation is Procedural
//      variables are in one section, functions in another
//      They are "decoupled"

// All part of one unit, the employee object
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employee.getWage();

// Better because functions either don't need parameters or have less, easier to use
// "The best funcitons are those with no parameters"

// #MARK: Abstraction
//      removing complexity that is not needed for the user
//          - Hide the details and Complexity
//          - Show only the Essentials
//          - Results in a Simpler Interface
//          - Reduces the impact of change
//              Deleting parameters or changing funcitons don't affect the outside
//      - Reduces complexity
//      - Isolotate the impact of changes
//      Its not only about hiding things we don't want people to see, its about making sure they can't modify things we don't want them to
//      You may want to make a property read only so they can't change it, thats abstraction, they don't have full control

// #MARK: Inheritance
//      Mechanism for eliminationg redundant code
//      Example: TextBox, SelectBox, CheckBox components
//          - All have the following properties: hidden, innerHTML
//          - All have the following methods: click(), focus()
//      Define these once in an object: HTMLElement
//      These objects then inherit that code
//      The HTMLElement class is the Base/Super/Parent class
//      The TextBox is the Derived/Sub/Child class
//      Refer to the relation between the 2 as "IS-A relationship"
//          "TextBox is a HTMLElement"
//      This is all classical inheritance because it uses classes
//      In JavaScript, we have Prototypical Inheritance
//

// #MARK: Polymorphism
//       "Many"-"Form"
//      A away to get rid of many if/else, switch/case statements
//      Example: The above html elements should all have the ability to be rendered on a page
//      - The way each is rendered, is different from eachother, you'd end up with this:
//          switch(...) {
//              case 'select': renderSelect();
//              case 'text': renderText();
//              case 'check': renderCheck();
//              case ...
//
//      Instead: create a render() method in each object, and it will behave differently
//      Example: Instead do this:
//          element.render();

// Benefits
// Encapsulation:
//      - Reduce Complexity
//      - Increase Reusability
// Abstraction:
//      - Reduce Complexity
//      - Isolate impact of changes
// Inheritance:
//      - Eliminate redundant code
// Polymorphism:
//      - Refactor ugly swith/case statements
