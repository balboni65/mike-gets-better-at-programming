// #MARK: What is TypeScript?

// TypeScript is a programming language created at Microsoft to address the shortcomings of JavaScript
// Built on top of JavaScript
// Every JS file is a valid TS file
// most important feature is static typing

// Statically-Typed
//  - (C++, C#, Java)
// int number = 10;
// number = "a"; X cannot do

// Dynamically-Typed
//  - (JavaScript, Python, Ruby)
// int number = 10;
// number = "a" works

// TypeScript is JavaScript with Type Checking

let x: number = 10;
// x = "a"; throws an error

// Drawbacks
// - Compilation step
//   - "Transpilation"
//     - Compiler changing .ts files to .js files
// - Need to be more disciplined

// Installation:
// npm i -g typescript
// typescript version:
// tsc -v

// TypeScript is a superset of JavaScript since its built on top
//  - this means it can do antyhing JavaScript can do, plus new stuff
//  - so any JavaScript code will work.

let age: number = 10;

// run: tsc fundamentals.ts
// generates a fundamentals.js file
//  - instead of let:
//    - var age = 20;

// It uses var because it uses the old es5 js version
// This casuses problems such as our variables failing their context

// #MARK: Configuring TypeScript

// run: tsc --init
//  - creates a tsconfig.json
//  - most are commented out

// for "target": "ES2016"
//  - you can delete the value and do ctrl+space to see values
//  - ES2016 supports the most things but is the slowest
//  - Typescript by default with no config uses before ES was around

// uncomment out "rootDir"
//  - this is our root directory
//  - change it to ./src
//  - create a .src folder and put all the code in there

// uncomment out "outDir"
//  - this is the folder that will contain the generated js files
//  - change it to "./dist"

// uncomment out "removeComments"

// uncomment out "noEmitOnError"
//  - This will not generate the js file if you have errors in your code

// we can no run our code with:
// tsc

// compiles all typeScript files in the project
// creates a dist folder
// puts all the js files in there

// #MARK: Debugging TypeScript

// go to tsconfig.json
// uncomment "sourceMap"
//  - defines how every line of ts code maps to js code
// run: tsc
// now have a fundamentals.js.map

// Adding a breakpoint in a code with logic (f9)
if (age < 50) age += 10;

// go to Debug Panel
// in the first section:
//  - Click on the text "create a launch.json file"
//  - from the drop down select node.js
// creates launch.json
// add another setting after "program":
// "preLaunchTask": "tsc: build - tsconfig.json",
//  - tells vs code to build our application using the typescript compiler

// go back to the debug panel
// click on Launch Program
//  - "Launch Program" is the label set in the config

// lets change it to Debug Program in launch.json
// "Debug Program" now appears at the top instead
// click on it or press (f5)

// I had an error for this, future me, look at the commit for this to figure out all the extra changes that don't line up.

// When debugging
// you can go to the "watch" window
// you can enter a variable
// it will then track it there
