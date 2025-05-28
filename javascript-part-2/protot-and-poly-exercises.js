// #MARK: Exercise 1 - Prototypical Inheritance
// Design 2 objects:
//   HtmlElement
//   HtmlSelectElement
//     - Represents a drop-down list
// It should have the following Behavior:

// const e = new HtmlElement()
// e
// HtmlElement {click: f}
//   click: f ()
//   __proto__:
//     focus: f ()
//     constructor: f HtmlElement()
//     __proto__: Object

// e.click() => clicked
// e.focus() => focused

// const s = new HtmlSelectElement([1,2,3]) // optional items in an array (initialized to [] if blank)
// s
// HtmlSelectElement {items: Array(0), addItem: f, removeItem: f}
//   addItem: f (item)
//   items:[]
//   removeItem: f (item)
//   __proto__: HtmlElement

// s.addItem('1')
// s.addItem('2')
// s.addItem('3')
// s.removeItem('2')

// s
// HtmlSelectElement {items: Array(2), addItem: f, removeItem: f} *NEW*
//   addItem: f (item)
//   items:[1,3] *NEW*
//   removeItem: f (item)
//   __proto__: HtmlElement
//     click: f ()
//     __proto__:
//       focus: f ()
//       constructor: f HtmlElement()
//       __proto__: Object

// My Solution

function HtmlElement() {
  this.click = function () {
    console.log("Clicked!");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("focused");
};

const e = new HtmlElement();
console.log(e);

// correct so far

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (value) {
    console.log("adding items");
    this.items.push(value);
  };

  this.removeItem = function (value) {
    console.log("removing items");
    this.items = items.filter((item) => item !== value);
  };
}

const s1 = new HtmlSelectElement([1, 2, 3]);
console.log(s1);

// CANNOT DO THIS:
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// This would only get the .focus member
// Doing an instance instead gets both
HtmlSelectElement.prototype = new HtmlElement(); // include ()

HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s2 = new HtmlSelectElement([1, 2, 3]);

// s1 still has the old prototype
console.log(s2);

// #MARK: Exercise 2 - Polymorphism

// Going off of previous code
// Create a render method

// s.render()
// "<select>
//   <option>1</option>
//   <option>2</option>
//   <option>3</option>
// </select>"

// Furthermore create an img with a custom render and takes a src

// const img = new HtmlImageElement();
// img
// HtmlImageElement{src: undefined, render: f}
//   render: f ()
//   src: undefined
//   __proto__: HtmlElement

// img.src = "http://#"
// image.render()
// "<img src="http://#" />"

// Afterwards:
// Create an array of elements
//
// const elements = [
// new HtmlSelectElement([1,2,3])
// new HtmlImageElement("http://#")
// ];
//
// for (let element of elements)
//   console.log(element.render());

// .render() does not automatically log anything, returns a string

// My Solution:
// ToDo: List:
// Create a render method for the select element that returns a string
// create a new image element
// create a render method for the image element that returns a string
// create a src() method that sets the source with default of ""
// create an array of elements and render them all.

// Making a new one for this exercise
function HtmlDropElement(items = []) {
  this.items = items;

  this.addItem = function (value) {
    console.log("adding items");
    this.items.push(value);
  };

  this.removeItem = function (value) {
    console.log("removing items");
    this.items = items.filter((item) => item !== value);
  };

  this.render = function () {
    const itemsMapped = items.map((n) => `\t<li>${n}</li>\n`).join("");
    return `<section>
${itemsMapped}
</section`;
  };
}

HtmlDropElement.prototype = new HtmlElement();
HtmlDropElement.prototype.constructor = HtmlDropElement;

function HtmlImageElement(link = "") {
  let source = link;
  this.src = function (value) {
    source = value;
  };
  this.render = function () {
    return `<img src="${source}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlDropElement([1, 2, 3]),
  new HtmlImageElement("http://#"),
];

for (let element of elements) console.log(element.render());
