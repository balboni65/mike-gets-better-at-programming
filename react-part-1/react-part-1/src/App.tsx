// import Message from "./components/Message";
// import ListGroup from "./components/ListGroup";
import Props from "./components/Props";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* React component with self closing syntax if you aren't supposed to pass anything */}
      {/* <ListGroup /> */}

      {/* Need to add properties */}
      <Props items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

// Export the app
export default App;
