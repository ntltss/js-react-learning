import React from "react";
import ComponentA from "./components/ComponentA";

export const UserCount = React.createContext();

function SampleUseContext() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={100}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default SampleUseContext;
