import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddDinner.module.css";
const AddDinner = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [emptyInput, setEmptyInput] = useState("Please enter a dinner's name.");

  const addDinnderHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setEmptyInput("Empty name, try again");
      return;
    }
    props.onAddDinner(enteredName);
    setEnteredName("");
    setEmptyInput("Please enter a dinner's name.");
  };

  const name_Change = (event) => {
    setEnteredName(event.target.value);
  };
  return (
    <Card className={classes.adddinner}>
      <label className={classes.label_name} htmlFor="name">
        Name
      </label>
      <div className={classes.input}>
        <input
          className={classes.input}
          onChange={name_Change}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      <div className={classes.submit}>
        <Button onClick={addDinnderHandler}>
          Add
        </Button>
      </div>

      <label className={classes.label_msg}>{emptyInput}</label>
      <label className={classes.ns_label}>
        When finished entering users, click here:{" "}
      </label>
      <div className={classes.nextstep}>
        <Button onClick={props.onNextStep}>Next step</Button>
      </div>
    </Card>
  );
};
export default AddDinner;
