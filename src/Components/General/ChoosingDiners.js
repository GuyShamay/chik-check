import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ChoosingDiners.module.css";
import ChoosingItem from "./ChoosingItem";

const ChoosingDiners = (props) => {
  const [chosenDiners, setChosenDiners] = useState([]);

  const submitServingHandler = () => {
    props.onSubmitServing(chosenDiners, chosenDiners.length);
  };
  
  const dinnerSelectedHandler = (dinner) => {
    setChosenDiners((prev) => {
      return [...prev, { dinner: dinner }];
    });
  };

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
          <div className={classes.actions}>
            <Button onClick={submitServingHandler}>Submit</Button>
          </div>
        </header>
        <ul>
          {props.diners.map((dinner) => (
            <ChoosingItem dinner={dinner} onSelected={dinnerSelectedHandler} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ChoosingDiners;
