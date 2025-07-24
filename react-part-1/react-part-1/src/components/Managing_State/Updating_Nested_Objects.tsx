import { useState } from "react";

function App_Initial() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// We want to update the zipCode when clicking the button

function App_2() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    // NOTE: the spread operator is "shallow"
    //  What that means is that the nested "address" object that exists within ...customer is not a unique instance
    //  It is a reference to the address object in memory. So rather than an independent copy, modifying 1 will modify both
    //  We need to override this by copying it again with another spread operator.
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 987111 },
    });

    // So here we copy all the properties of customer
    //  This includes a reference in memory to the address object
    // We then override the address property to give it a new value
    // That new value is all the properties of the "address" object by using another spread operator
    // Finally, within that object we override the zipCode property by giving it a new value.
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
