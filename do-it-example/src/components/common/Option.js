import React from "react";

const Option = ({ value, label, disabled }) => (
  <option value={value} disabled={disabled}>
    {label || value}
  </option>
);

export default Option;
