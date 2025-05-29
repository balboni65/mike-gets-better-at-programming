// Implementation Detail
const _length = new WeakMap(); // Changing this won't break anything else

// Public Interface
class Square {
  constructor(length) {
    _length.set(this, length);
  }

  draw() {
    console.log("Circle with radius " + _length.get(this));
  }
}

// Exporrt the class
module.exports.Square = Square;
// alt way
module.exports = Square;

// Only exporting Square
// You cannot access _length in other files
