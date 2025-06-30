import { useState } from "react";
import styles from "./ListGroupProps.module.css";

// Want to add functionality for reusability
interface ListGroupProps {
  items: string[];
  heading: string;
  // Want to add functionality to notify the app component on click
  onSelectItem: (item: string) => void;
}

function Props({ items, heading, onSelectItem }: ListGroupProps) {
  // Moving this to App Component
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [newSelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {/* To Fix error, prefix with the variable from the interface | "listGroupProps.items.length"*/}
      {/* In this case, we destructured the inputs from the interface*/}
      {items.length >= 20 ? <p>Too many items!</p> : null}

      {/* <ul className="list-group"> */}
      {/* New styles version | Joined with a space*/}
      <ul className={[styles.ListGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              newSelectedIndex === index && "active"
            }`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Props;

// Difference between Props and State

// ==== Props ====
// - Input passed to a component
// - similar to function arguments
// - passed input should be treated as read only | "Immutable"

// ==== State ====
// - Data managed by a component
// - Similar to local variables
// - data SHOULD CHANGE | Mutable

// If either changes, react will update the dom
