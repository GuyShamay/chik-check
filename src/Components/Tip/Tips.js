import React, { useState } from "react";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import classes from "./Tips.module.css";

const Tips = (props) => {
  const [checked, setChecked] = useState(false);
  const [tip, setTip] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter Tip (%)");

  const [action, setAction] = useState("Add Tip");

  const tip_Change = (event) => {
    setTip(event.target.value);
  };

  const calcTipHandler = (event) => {
    event.preventDefault();

    if (!checked) {
      // adding tip
      if (tip.trim().length === 0) {
        return;
      }
      setAction("Different Tip");
      setPlaceholder("Tip was calculated!")
      props.onAddTip(tip);
    } else {
      setAction("Add Tip");
      props.onDeleteTip();
    }
    setChecked(!checked);
    setTip("");
  };

  return (
    <div className={classes.tips}>
      <input
        type="number"
        value={tip}
        placeholder={placeholder}
        disabled={checked}
        onChange={tip_Change}
      />

      <button type="button" onClick={calcTipHandler}>
        {action}
      </button>
    </div>
  );
};
export default Tips;
