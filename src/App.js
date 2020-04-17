import React from "react";
import "./App.css";
import Photos from "./Component/photos";
import Cards from "./Component/card";

function App() {
  return (
    <div className="App">
      <p>
        <Card />
        <Photos />
      </p>
      
    </div>
  );
}

export default App;
