import { Circle2 as MyCircle, Square2 } from "./shapes";
// "./" to reference current directory
// "ctrl + space" inside the {} will show options for what to import
// can use "as " to rename the import

// "Square2 as MySquare" isn't used
// press "ctrl + . " to bring up the quick fix menu, and remove it

let circle = new MyCircle(1);
console.log(circle.radius);

// VSCode can also automatically import when needed

let square = new Square2(1); // Automatically imported "Square2"
console.log(square);

// In the quick fix menu, you can also select "move to a new file"

// #MARK: Module Formats
// - AMD
// - UMD
// - CommonJS
// - ES2015 / ES6

// In tsconfig.json:
//     "module": "es2015" /* Specify what module code is generated. */,

// #MARK: Default Exports

// import { StoreHouse } from "./storage"; | Only importing 1 thing, better way
import StoreHouse from "./storage";
// - No curly braces on default export
let storeHouse = new StoreHouse();
console.log(storeHouse);

// #MARK: Wildcard Imports

import * as Shapes from "./shapes";
Shapes.Square2;

// #MARK: Re-exporting

// Created a new file called "re-exporting.ts"
// Imported multiple different classes from differernt files
// Exported them all at once as a "package"

import {
  Circle2 as ReExportCircle,
  StoreHouse as ReStoreHouse,
} from "./re-exporting";

let reCircle = new ReExportCircle(1);
console.log(reCircle);
let reStoreHouse = new ReStoreHouse();
console.log(reStoreHouse);

// as a best practice, go to tsconfig.json and set the following property to: "node"
// "moduleResolution": "node10", 