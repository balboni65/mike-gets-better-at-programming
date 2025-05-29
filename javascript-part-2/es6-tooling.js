// #MARK: Modules

const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

const c = new Circle(10);
console.log(_radius.get(c)); // We have access to this still
c.draw();

// We want to move the _radius assignment and the Circle class to a new file and only expose the Circle class

// Module
// AMD - Asynchronous Module Definition
//  - Browsers
// CommonJS
//  - Node.js
// UMD - Universal Module Definition
//  - browsers/node.js
// ES6 Modules
//  - browsers

// Things that are highly related should go together
//  - Also called cohesion

// Importing
const Square = require("./es6-tooling-2.js");
const s = new Square(10);

// #MARK: ES6 Modules

// import another file
import { Square } from "./es6-tooling-2.js"; // creates an http request
// to do this you have to change index.html
// <script src="index.js"></script>
// you need to add a type
// <script type="module" src="index.js"></script>

// #MARK: ES6 Tools

// Transpiler
//  - translate + compiler
//  - Convert javascript code into code that all browsers can understand
//    - Babel
// Bundler
//  - converts all js files into one js file called a bundle
//  - minifies code, then uglifies code by changing the names of everything into small characters to reduce size
//    - Webpack

// #MARK: Babel

// cd into the folder "es6-tooling"
// npm init --yes
// npm i babel-cli@6.26.0 --save-dev
//  - command line interface
// npm i babel-core@6.26.0 --save-dev
//  - logic for transpiling code is done
// npm i babel-preset-env@1.6.1 --save-dev
//  - install all plugins (all the new features)
