import React, { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA.js";

export const UserCount = React.createContext();

function SampleUseContextWithUseState() {
  const [count, setCount] = useState(200);
  const value = {
    count,
    setCount,
  };
  return (
    <div className="SampleUseContextWithUseState">
      <h1>Learn useContext</h1>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default SampleUseContextWithUseState;
