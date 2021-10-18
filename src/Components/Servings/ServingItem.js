import React, { useState } from "react";
import classes from "./ServingItem.module.css";

const ServingItem = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const selectedItemHandler = () => {
    if (!isSubmit) {
      setIsSubmit(true);
      props.onClick(props.serving);
    } else {
      return;
    }
  };
  return (
    <li
      className={`${classes.li} ${isSubmit && classes.li_submited}`}
      onClick={selectedItemHandler}
    >
      <h2 className={classes.serving__name}>{props.name}</h2>
      <div className={classes.serving__price}>{props.price}₪</div>
    </li>
  );
};

export default ServingItem;
