import React, { useState } from "react";
const Checkbox = (props) => {
  
  return (
    <label>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      {props.title}
    </label>
  );
};

export default Checkbox;
