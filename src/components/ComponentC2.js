import React, { useContext } from "react";
import { UserCount } from "../SampleUseContextWithUseState";

const ComponentC2 = () => {
  const { count, setCount } = useContext(UserCount);

  return (
    <div>
      <p>Componet C2</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default ComponentC2;
