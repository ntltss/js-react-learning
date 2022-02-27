import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "DOUBLE_INCRE":
      return { count: state.count * 2 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="">
      <h1>Counter</h1>
      <h2>カウント: {state.count}</h2>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("DOUBLE_INCRE")}>++</button>
      <button onClick={() => dispatch("RESET")}>0</button>
    </div>
  );
}

export default Counter2;
