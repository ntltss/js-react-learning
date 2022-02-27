import React from "react";
import { useCountContext } from "../context/CountContext";

const ComponentC4 = () => {
  // const { count, setCount } = useCountContext();
  const { countDown } = useCountContext();
  return (
    <div>
      <p>Componet C4</p>
      {/* <p>{count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default ComponentC4;
