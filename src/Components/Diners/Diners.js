import React from "react";
import AddDinner from "./AddDinner";
import DinersList from "./DinersList";
import classes from "./Diners.module.css";
const Diners = (props) => {
  const addDinnerHandler = (uName) => {
    props.onAddDinner(uName);
  };
  const stopAdding = () => {
    props.onStopAddingDiners();
  };
  return (
    <div className={classes.diners}>
      <AddDinner onAddDinner={addDinnerHandler} onNextStep={stopAdding} />
      <div className={classes.list}>
        <DinersList diners={props.diners} />
      </div>
    </div>
  );
};

export default Diners;
