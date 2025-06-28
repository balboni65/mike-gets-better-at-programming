//When creating this file:
// use ".ts" for pure typescript
// use ".tsx" for react files
// File names are capitalized?

// PascalCasing for React components
function Message() {
  const name = "Mike";

  //JSX: JavaScript XML
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

// Export as a default component
export default Message;

// When React compiles the code,
// 1. it starts at index.html
// 2. In the "<scripts>" section, it sees "main.tsx"
// 3. In "main.tsx", it has special html, referencing "<App />"
// 4. This loads the "App.tsx" component, which then loads the "Messsage.tsx" component
// Message.tsx is a "child" component

// it uses this to build the "Virtual DOM"
// This is a lightweight in memory representation of the component tree
//  - not the actual DOM

// Each node in this "Virtal DOM" is a component and its properties
// When the state or data of a component changes, it updates the node in the Virtual DOM
// Then compares current DOM to old DOM, updates those nodes in the REAL DOM
//  - "react-dom" dependency does this

// React is used exclusively for UI
// It is a library, which does 1 thing
// Angular is a framework, it does many things including back-end
