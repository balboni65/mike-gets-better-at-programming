// Arithmetic
let x = 10;
let y = 3;

// Basic Arithmetic Operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // Modulus (Remainder)
console.log(x ** y); // Exponentiation (Power)

// Increment and Decrement
console.log(++x); // Displays 11
console.log(x++); // Displays 10
console.log(x); // Displays 11

console.log(--x); // Displays 9
console.log(x--); // Displays 10
console.log(x); // Displays 9

// Assignment Operators
let a = 10;
a = a + 5;
a += 5;

a = a * 3;
a *= 3; // Can always combine with assignment operator

// Comparison Operators
console.log(x == y); // Equal to
console.log(x != y); // Not equal to
console.log(x === y); // Strict equal to (checks type and value)
console.log(x !== y); // Strict not equal to (checks type and value)
// Strict Equality (Type and Value are equal)
console.log("1" === 1); // false
// Loose equality (checks value only)
console.log("1" == 1); // true
console.log(true == 1); // true
// Automatically converts the types to match.

// Relational Operators
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to

// Ternary Operator
let points = 110;
let typeOfCustomer = points > 100 ? "Gold" : "Silver"; // If points are greater than 100, Gold, else Silver

// Logical Operators
console.log(true && true); // AND
console.log(true || false); // OR
console.log(!false); // NOT

// Logical Operators with Non-Boolean Values
console.log(false || "Mike"); // Returns "Mike" because the first value is false
console.log(false || 1); // Returns 1 because the first value is false
// Falsy:
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)

// Truthy:
// Anything that is not falsy

// Short Circuiting
console.log(false || 1 || 2 || 3 || 4 || 5); // Returns 1 because it's the first truthy value
// Can be useful for default values
console.log(userInput || "Default Value"); // If userInput is falsy, it will return "Default Value"

// Bitwise Operators

// 1 = 00000001
// 2 = 00000010
// R = 00000011 checks if either is 1, if so, set that bit to 1
console.log(1 | 2); // Bitwise OR, returns 3
console.log(1 & 2); // Bitwise AND, returns 0
// Useful for permissions
// Read Write Execute
// 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0; // No permissions
myPermission = myPermission | readPermission; // Add read permission
console.log(myPermission & readPermission ? "yes" : "no"); // Check if read permission is set
