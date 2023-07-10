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
            autoComplete="off"
            defaultChecked
          ></input>
          <label className="btn btn-outline-secondary" htmlFor="btnradio1">
            0%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          ></input>
          <label className="btn btn-outline-secondary" htmlFor="btnradio2">
            25%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
          ></input>
          <label className="btn btn-outline-secondary" htmlFor="btnradio3">
            50%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio4"
            autoComplete="off"
          ></input>
          <label className="btn btn-outline-secondary" htmlFor="btnradio4">
            75%
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio5"
            autoComplete="off"
          ></input>
          <label className="btn btn-outline-secondary" htmlFor="btnradio5">
            100%
          </label>
        </div>
      </div>
    </div>
  );
}

export default ManualForm;
