import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  // switch (action) {
  //   case "increment":
  //     return state + 2;

  //   case "decrement":
  //     return state - 1;

  //   default:
  //     return state;
  // }

  if(action==="increment"){
    return state+1
  }
  if(action==="decrement"){
    return state-1
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch("increment")}>
        +++
      </button>

      <button onClick={() => dispatch("decrement")}>
        ---
      </button>
    </div>
  );
}

export default Counter;