import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  // Note: You can only use hooks at the top level of your component
  // Order matters, you cannot use these in conditional places

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
