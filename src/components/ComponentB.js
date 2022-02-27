import React from "react";
import ComponentC from "./ComponentC";
import ComponentC2 from "./ComponentC2";
import ComponentC3 from "./ComponentC3";
import ComponentC4 from "./ComponentC4";
import { useCountContext } from "../context/CountContext";

const ComponentB = () => {
  const { count, setCount } = useCountContext();
  return (
    <div>
      <p>Componet B</p>
      {/* <ComponentC /> */}
      {/* <ComponentC2 /> */}
      {/* <ComponentC3 /> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <ComponentC4 />
    </div>
  );
};

export default ComponentB;
