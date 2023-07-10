import React from "react";

function ManualForm() {
  return (
    <div className="card w-100 mt-3">
      <div className="card-body">
        <div
          className="btn-group-vertical w-100"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          ></input>
          <label className="btn btn-outline-secondary" for="btnradio1">
            0%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          ></input>
          <label className="btn btn-outline-secondary" for="btnradio2">
            25%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
          ></input>
          <label className="btn btn-outline-secondary" for="btnradio3">
            50%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio4"
            autocomplete="off"
          ></input>
          <label className="btn btn-outline-secondary" for="btnradio4">
            75%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio5"
            autocomplete="off"
          ></input>
          <label className="btn btn-outline-secondary" for="btnradio5">
            100%
          </label>
        </div>
      </div>
    </div>
  );
}

export default ManualForm;
