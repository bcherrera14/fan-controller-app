import React from "react";

function FormSelector() {
  return (
    <select
      className="form-select text-center fw-bold"
      aria-label="Default select example"
      defaultValue="1"
    >
      <option value="1">Duty Cycle</option>
      <option value="2">Cycle</option>
    </select>
  );
}

export default FormSelector;
