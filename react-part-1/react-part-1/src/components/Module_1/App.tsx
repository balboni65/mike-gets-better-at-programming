// import Message from "./components/Message";
// import ListGroup from "./components/ListGroup";
import ListGroupProps from "../ListGroupProps";
import { useState } from "react";
import { Alert } from "./Alert";
import { Alert2 } from "./Alert";
import Exercise_1 from "./Exercise_1";
import Exercise_2 from "../Exercise_2/Exercise_2";

// Adding icons
// Run "npm i react-icons@latest"
import { FaRegCalendarPlus } from "react-icons/fa"; // Notice how you had to add "/fa" since it starts with "Fa"

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const [exercise2Visible, setExercise2Visibility] = useState(false);

  return (
    <div>
      {/* React component with self closing syntax if you aren't supposed to pass anything */}
      {/* <ListGroup /> */}

      {/* Need to add properties when adding this component */}
      <ListGroupProps
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {/* Passing Via Children */}
      {/* <Alert>Hello World</Alert> */}

      <Alert2>
        <span>Hello World</span>
      </Alert2>

      {/* Exercise 1 */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Exercise_1 color="danger" onClick={() => setAlertVisibility(true)}>
        Test
      </Exercise_1>

      {/* Icons */}
      <FaRegCalendarPlus color="red" size="40" />

      {/* Exercise 2 */}
      <button onClick={() => setExercise2Visibility(true)}>Exercise 2</button>
      {exercise2Visible && (
        <Exercise_2 onClick={() => console.log("clicked")} />
      )}
    </div>
  );
}

// Export the app
export default App;

// Term: Cohesion
// - Things that are related should be next to eachother
// - Things that are not related should be seperate
