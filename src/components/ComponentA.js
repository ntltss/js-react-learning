import React from "react";
import ComponentB from "./ComponentB";
import { useCountContext } from "../context/CountContext";

const ComponentA = () => {
  const { count } = useCountContext();
  return (
    <div>
      <p>Componet A</p>
      <ComponentB />
      <p>{count}</p>
    </div>
  );
};

export default ComponentA;
