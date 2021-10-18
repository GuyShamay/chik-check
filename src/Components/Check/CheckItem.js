import React from "react";
import classes from "./CheckItem.module.css";
const CheckItem = (props) => {
  return (
    <li className={classes.item} key={props.dinner.id}>
      {props.dinner.name}
    </li>
  );

};
export default CheckItem;
