// #MARK: Exercise 1
// Create a stack class

// Stack {}
//   count: 0
//   __proto__:
//     constructor: class Stack
//     count: (...)
//     peek: f peek()
//     pop: f pop()
//     push: f push(obj)
//     get_count: f count()
//     __proto__: Object

// peek - shows you whats on top of the stack
//  - Throws error when stack is empty
// pop removes the object from the stack and logs it
//  - Throws error when stack is empty
// push adds the object to the top of the stack
// count gets how many are in the stack
const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }
  peek() {
    return _stack.get(this)[_stack.get(this).length - 1];
  }
  pop() {
    _stack.get(this).pop();
  }
  push(value) {
    _stack.get(this).push(value);
  }
  get count() {
    return _stack.get(this).length;
  }
}

let s = new Stack();
