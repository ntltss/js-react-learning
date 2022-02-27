import React, { useContext } from "react";
import { UserCount } from "../SampleUseContextWithUseReducer";

const ComponentC3 = () => {
  const { state, dispatch } = useContext(UserCount);

  return (
    <div>
      <p>Componet C3</p>
      <p>{state.count}</p>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
    </div>
  );
};

export default ComponentC3;
