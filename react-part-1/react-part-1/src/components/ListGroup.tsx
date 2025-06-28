function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Remember that .map says:
  // - Converts each item, to an item of a different type
  // Remember to set a unique key for each element with "key="
  let listItems = items.map((item) => <li key={item}>{item}</li>);

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

      {/* Now sends the list group, with an array of list items, just have to pass the variable */}
      <ul className="list-group">{listItems}</ul>
    </>
  );
}

export default ListGroup;
