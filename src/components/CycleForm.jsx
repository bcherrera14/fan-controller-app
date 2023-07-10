import React from "react";

function CycleForm() {
  return (
    <div className="card w-100 mt-3">
      <div className="card-body">
        <div class="row mb-3">
          <label for="colFormLabel" class="col col-form-label fw-bold">
            Total Cycles:
          </label>
          <div class="col">
            <input type="text" class="form-control" id="colFormLabel"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabel" class="col col-form-label fw-bold">
            On Time:
          </label>
          <div class="col">
            <input type="text" class="form-control" id="colFormLabel"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabel" class="col col-form-label fw-bold">
            Off Time:
          </label>
          <div class="col">
            <input type="text" class="form-control" id="colFormLabel"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabel" class="col col-form-label fw-bold">
            Cycle Count:
          </label>
          <div class="col">
            <p>0</p>
          </div>
        </div>
        <div className="row">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-success">
              Start
            </button>
            <button type="button" class="btn btn-danger">
              Stop
            </button>
            <button type="button" class="btn btn-secondary">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CycleForm;
