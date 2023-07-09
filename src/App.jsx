import React from "react";
import Header from "./components/Header";
import Stream from "./components/Stream";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Stream></Stream>
      </div>
    </div>
  );
}

export default App;
