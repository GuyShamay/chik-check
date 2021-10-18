import React from "react";
import HeadLogo from "../General/HeadLogo";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Check.module.css";

const Check = (props) => {
  const finishDinnigHandler = () => {
    props.onFinishDinnig();
  };
  return (
    <div className={classes.backdrop}>
      <HeadLogo />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
          <div className={classes.actions}>
            <Button onClick={finishDinnigHandler}>Finish</Button>
          </div>
        </header>
        <ul>
          {props.diners.map((dinner) => (
            <li key={dinner.id}>
              <h2 className={classes.name}>{dinner.name}:</h2>
              <h4 className={classes.price}>{dinner.amountToPay.toFixed(2)}₪</h4>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
export default Check;
