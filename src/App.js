import React from "react";
import Home from "./Components/Home";

function App(props) {
  const { initialData } = { ...props };
  return (
    <div className="app-container">
      <Home initialData={initialData} />
    </div>
  );
}

export default App;
