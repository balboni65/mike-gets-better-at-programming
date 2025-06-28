import { useState, type MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Variable for determining which input box is selected
  let selectedIndex = -1;
  // ^ This variable is local, react is not aware of when it changes, and thus doesn't refresh

  // Add a hook | This returns an array
  // const exampleHook = useState(-1);
  // exampleHook[0] | Variable (selectedIndex)
  // exampleHook[1] | updator function

  // Implementing a hook, its best to do 2 varirables at the same time to seperate them
  // const [name, setName] = useState(""); | <- Another example
  const [newSelectedIndex, setSelectedIndex] = useState(-1);

  // Note: Each component has its own state
  // If we add another <ListGroup /> component, it will be completely seperate from the other instance

  // Remember that .map says:
  // - Converts each item, to an item of a different type
  // Remember to set a unique key for each element with "key="
  let listItems = items.map((item, index) => (
    <li
      className="list-group-item"
      key={item}
      onClick={() => console.log(item, index)}
    >
      {item}
    </li>
  ));

  // We know this is "MouseEvent" because we hovered over the original code, since this is just abstracting it
  // This function is an "Event Handler"
  const handleClick = (event: MouseEvent, index: number) => {
    selectedIndex = index;
    console.log(event);
  };

  // NEW VERSION OF LIST ITEMS
  listItems = items.map((item, index) => (
    // Doesn't use handleClick(), function isn't called, only referenced
    // This is because the function isn't called now, its called at runtime
    <li
      className={`list-group-item ${selectedIndex === index && "active"}`}
      key={item}
      // Doesn't work
      onClick={(event) => handleClick(event, index)}
    >
      {item}
    </li>
  ));

  // Working verrsion of list items
  listItems = items.map((item, index) => (
    // Doesn't use handleClick(), function isn't called, only referenced
    // This is because the function isn't called now, its called at runtime
    <li
      className={`list-group-item ${newSelectedIndex === index && "active"}`}
      key={item}
      // Doesn't work
      onClick={() => setSelectedIndex(index)}
    >
      {item}
    </li>
  ));

  // Conditional Rendering
  if (items.length === 0)
    return (
      <>
        <h1>Testing Failure!</h1>
        <p>No item found</p>
      </>
    );

  // Conditional Rendering
  const getMessage = () => {
    return items.length >= 20 ? <p>Too many items!</p> : null;
  };

  return (
    // Cannot send a second element
    // <h1></h1> | Error, could wrap in a div to fix
    //  - Instead wrap in a "<Fragment>"
    //  - Instead of a <Fragment> tag, just do <>, its the same syntax and doesn't need an import

    // Select code then do: Ctrl + shift + p | Opens the Command Pallete
    // Choose: "Emmet: Wrap with Abbreviation"
    // I have rebound this to "alt+q"

    // Using "<>" instead of "<Fragment>"
    <>
      {/* Can now add another element */}
      <h1>Test!</h1>

      {/* Conditional Rendering */}
      {items.length >= 20 ? <p>Too many items!</p> : null}
      {/* Or instead do this: */}
      {getMessage()}
      {/* Or instead do this: */}
      {items.length >= 20 && <p>Too many items!</p>}
      {/* In JavaScript, doing "true && value" returns the value */}
      {/* Therefor we can do a conditional statement and immediately return something, without having an else condition */}
      {/* If False, nothing happens */}

      {/* Now sends the list group, with an array of list items, just have to pass the variable */}
      <ul className="list-group">{listItems}</ul>
    </>
  );
}

export default ListGroup;
