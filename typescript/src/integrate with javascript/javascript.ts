// #MARK: Including JS Code in TS Projects

// import { calculateTax } from "./tax"; | Error, ts is not included as base

// go to tsconfig.json
// turn on: "allowJs": true,

import { calcualteTax } from "./tax";

calcualteTax;

// NOTE: also had to change "module": "commonjs"

// #MARK: Type Checking JS Code

// go to tsconfig.json
// turn on: "checkJs": true,
//  - This adds basic type checking

// let tax = calcualteTax() | Shows an error b/c the type of the parameter is an implicit any
// go to tax.js, add the line at the top so ts doesn't check it

let tax = calcualteTax(); // Doesn't throw an error because as a default, ts will pass undefined here as the 1 parameter
// Because the function in js is an implicit any, you can pass undefined without error
console.log(tax); // NaN

// #MARK: Describing Types using JSDoc

import { docExample } from "./doc";
// let doc = docExample(); | Throws an Error, "Expected 1 argument but got 0"
//  - This appears because we added the JSDoc comment specifying a type.

let doc = docExample(11_000);
console.log(doc);

// We added descriptions in the doc.js file
// if you hover over "docExample" import statement, you can see the info we added
