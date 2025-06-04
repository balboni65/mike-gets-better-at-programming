// Same name as js file
// .d means declaration

// Just declaring the function here, not implementing it
export declare function calculateFax(income: number): number;
// - Used to supply typing information to the compiler

// Only affects the references you state
// If we had another funciton inside doc-example.js
// for instance, the "sayHello" function
// We cannnot import that function anymore, only the ones we declare here