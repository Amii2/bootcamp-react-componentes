import React, { useReducer } from "react";

enum Action {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
  Reset = "RESET",
}

function reducer(state: number, action: Action) {
  switch (action) {
    case Action.Increment:
      return state + 1;
    case Action.Decrement:
      return state - 1;
    case Action.Reset:
      return 0;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, setCount] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(Action.Decrement)}>-</button>
      <button onClick={() => setCount(Action.Increment)}>+</button>
      <br />
      <button onClick={() => setCount(Action.Reset)}>reset</button>
    </div>
  );
}
