// Pure Function
// Given the same input, always returns the same result.

// This is important in React b/c of re-rendering

// props can skip their re-rendering if they use pure functions which do not change

let example_1 = 0;

let Message = () => {
  let example_2 = 0;

  example_1++;
  example_2++;

  console.log(example_1);
  console.log(example_2);

  return <div>Message {example_1}</div>;
  return <div>Message {example_2}</div>;
};

function Example_App() {
  return (
    <div>
      <Message />
      <Message />
      <Message />
    </div>
  );
}

// You would expect example 1 to return 1,2,3 however, it returns 2,4,6
// Whilst example 2 would return 1, 1, 1

// This is because of the <React.StrictMode> or <StrictMode>
// Strict mode is there to catch potential problems by first rendering it, then rendering it again to check
// This is used to catch impure components like the example 1 from above.
// This is why it renders 2,4,6
// The first render is used to catch potential issues with the code, the 2nd render is used to actually update the DOM

// This is why its important to always keep variables local when rendering components

// This would log 1,2 | 3,4 | 5,6