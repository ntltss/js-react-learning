import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA.js";
import { CountProvider } from "./context/CountContext";

function SampleUseContextWithContext() {
  return (
    <div className="SampleUseContextWithContext">
      <h1>Learn useContext</h1>
      <CountProvider>
        <ComponentA />
      </CountProvider>
    </div>
  );
}

export default SampleUseContextWithContext;
