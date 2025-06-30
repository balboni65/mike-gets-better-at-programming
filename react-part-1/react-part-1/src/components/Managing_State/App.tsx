import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);
  // Note: You can only use hooks at the top level of your component
  // Order matters, you cannot use these in conditional places

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  // Note: you should not declare a "useState" for "fullName", unecessary

  const [isLoading, setLoading] = useState(""); // Monitors weather the page is loading
  // Note: this does something very different to the first two
  //  - The first two manage the properties of a person
  //  - This manages the state of a page, therefore they should be seperated.

  // Take those values, and move them in an object as they are related
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  // Try to keep these at "1 level" and not nest your objects.
  const [personDeep, setPersonDeep] = useState({
    firstName: "",
    lastName: "",
    // BAD
    contact: {
      address: {
        street: {
          length: "",
        },
      },
    },
  });

  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible); // False
    // Update is not applied immediately, it is asynchronously
  }; // <- Applied here
  // That way it can update it all at once

  // Note: State is stored Outside of the component

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
