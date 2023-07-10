import React from "react";

function FormSelector() {
  return (
    <select
      className="form-select text-center fw-bold"
      aria-label="Default select example"
    >
      <option selected>Duty Cycle</option>
      <option value="1">Cycle</option>
    </select>
  );
}

export default FormSelector;
