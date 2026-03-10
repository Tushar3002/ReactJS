import React, { useState, useCallback, memo } from "react";

// Child component
const Button = memo(({ handleClick, label }) => {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={handleClick}>{label}</button>;
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  
  // Memoize the function
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // no dependencies → reference stays the same

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button handleClick={increment} label="Increase" />

      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default UseCallbackExample;