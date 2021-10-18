import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddServing.module.css";
const AddServing = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const [emptyInput, setEmptyInput] = useState(
    "Please enter the serving's name and price."
  );

  const addServingHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredPrice < 1
    ) {
      setEmptyInput("Wrong details, try again");
      return;
    }
    props.onAddServing(enteredName, enteredPrice);
    setEnteredName("");
    setEnteredPrice("");
    setEmptyInput("Please enter the serving's name and price.");
  };

  const name_Change = (event) => {
    setEnteredName(event.target.value);
  };
  const price_Change = (event) => {
    setEnteredPrice(event.target.value);
  };

  return (
    <Card className={classes.addServing}>
      <label className={classes.lblname} htmlFor="name">
        Serving
      </label>
      <div className={classes.inputname}>
        <input
          onChange={name_Change}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      <label className={classes.lblprice} htmlFor="price">
        Price
      </label>
      <div className={classes.inputprice}>
        <input
          onChange={price_Change}
          value={enteredPrice}
          type="number"
          id="price"
        />
      </div>
      <label className={classes.label_msg}>{emptyInput}</label>
      <div className={classes.btn}>
        <Button onClick={addServingHandler}>Add Serving</Button>
      </div>
    </Card>
  );
};
export default AddServing;
