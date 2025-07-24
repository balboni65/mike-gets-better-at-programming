import { useState } from "react";

function App_Initial() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// We want to add a new item to the array
//  Using something like "tags.push" will modify the original array

function App_2() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "new value!"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "hapiness" : tag)));

    // Remember that mapping a value is using the arrow function to run logic on every value
    // In this case for every value in the array, run the check,
    //  If the value is happy, returnr hapiness, otherwise return the tag value

    // You could also remove values this way, the "filter()" function is just shorthand for that exact thing
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// What if we want to update an array of objects?

function App_3() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // We want to update the first value
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // For every "bug" in the array | "bugs.map" | (bug) => ()
    // If the bug id is "1"
    //  Get all the values of that bug object, then override the "fixed" property to true
    // Otherwise return the bug object
    // Keep in mind that at the end of this, bugs.map returns a new array, which is used in "setBugs"
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
