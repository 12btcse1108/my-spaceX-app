import React from "react";
import Home from "./Components/Home";

function App(props) {
  let initialData;
  if (props.initialData) {
    initialData = props.initialData;
  } else {
    initialData = global.__initialData__;
  }
  return (
    <div className="app-container">
      <Home initialData={initialData} />
    </div>
  );
}

export default App;
