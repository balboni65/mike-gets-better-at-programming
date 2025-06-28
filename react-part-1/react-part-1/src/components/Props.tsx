import { useState } from "react";

// Want to add functionality for reusability
interface ListGroupProps {
  items: string[];
  heading: string;
}

function Props({ items, heading }: ListGroupProps) {
  // Moving this to App Component
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [newSelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {/* To Fix error, prefix with the variable from the interface | "listGroupProps.items.length"*/}
      {/* In this case, we destructured the inputs from the interface*/}
      {items.length >= 20 ? <p>Too many items!</p> : null}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              newSelectedIndex === index && "active"
            }`}
            key={item}
            // Doesn't work
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Props;
