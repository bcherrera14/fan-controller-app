import React from "react";
import Header from "./components/Header";
import Stream from "./components/Stream";
import FormSelector from "./components/FormSelector";
import ManualForm from "./components/ManualForm";
import CycleForm from "./components/CycleForm";

function App() {
  return (
    <div className="vh-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <Stream></Stream>
          </div>
          <div className="col">
            <div className="d-flex flex-column align-items-center">
              <FormSelector></FormSelector>
              <CycleForm></CycleForm>
              {/* <ManualForm></ManualForm> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
