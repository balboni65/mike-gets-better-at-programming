import { Fragment } from "react/jsx-runtime";

function ListGroup() {
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

      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
