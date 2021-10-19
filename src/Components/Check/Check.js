import React, { useState } from "react";
import HeadLogo from "../General/HeadLogo";
import Tips from "../Tip/Tips";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Check.module.css";

const Check = (props) => {
  const [isTip, setIsTip] = useState(false);
  const finishDinnigHandler = () => {
    props.onFinishDinnig();
  };
  const addTipHandler = (tip) => {
    setIsTip(true);
    props.onAddTip(tip);
  };

  const deleteTipHandler = (tip) => {
    setIsTip(false);
  };

  const payment = (dinner) =>{
    return isTip? dinner.payWithTip.toFixed(2):dinner.amountToPay.toFixed(2);
  }
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
        <Tips onAddTip={addTipHandler} onDeleteTip={deleteTipHandler} />
        <ul>
          {props.diners.map((dinner) => (
            <li key={dinner.id}>
              <h2 className={classes.name}>{dinner.name}:</h2>
              <h4 className={classes.price}>
                {payment(dinner)}₪
              </h4>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
export default Check;
