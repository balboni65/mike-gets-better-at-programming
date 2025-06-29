// import Message from "./components/Message";
// import ListGroup from "./components/ListGroup";
// import Props from "./components/Props";
import { useState } from "react";
import { Alert } from "./components/Alert";
import { Alert2 } from "./components/Alert";
import Exercise_1 from "./components/Exercise_1";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* React component with self closing syntax if you aren't supposed to pass anything */}
      {/* <ListGroup /> */}

      {/* Need to add properties */}
      {/* <Props items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}

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
    </div>
  );
}

// Export the app
export default App;
