import { useState } from "react";

// Group related state variables inside an object

function App_Initial() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// You should always treat arrays and objects in react as "Immutable" or "Read Only"

function App_2() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    drink.price = 6;
    setDrink(drink);
    // This will not work, you are direclty changing an object outside of this functions scope
    //   As such, it will not know to update the state, so calling this function will not re-render
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// NOTE: To update a state object in react, you have to give it a new state object

function App_3() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // Create a new object, copying the properties from the desired object
    const newDrink = {
        title: drink.title,
        price: 6
    }

    setDrink(newDrink) // Pass the newDrink
  };

  // State gets updated to 6

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// NOTE: to copy objects better, use the spread operator

function App_4() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
        ...drink, // This immediately copies all the properties and their values into this object
        price: 6 // Defining price here will override the value copied above.
    }

    setDrink(newDrink)
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// NOTE: You may not need to create a new object. Simply return one in the update call

function App_5() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // Just create a temporary object like so
    setDrink({...drink, price: 6})
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}