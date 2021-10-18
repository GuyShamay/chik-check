import React from "react";
import Card from "../UI/Card";
import classes from "./DinersList.module.css";

const DinersList = (props) => {
  if (props.diners.length === 0) {
    return (
      <Card className={classes.dinerslist__fallback}>
        <h2>Found no Diners</h2>
      </Card>
    );
  }
  return (
    <Card className={classes.diners}>
      <h2 className={classes.header}>Diners</h2>
      <ul>
        {props.diners.map((dinner) => (
          <li key={dinner.id}>{dinner.name}</li>
        ))}
      </ul>
    </Card>
  );
};

export default DinersList;
