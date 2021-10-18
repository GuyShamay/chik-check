import React from "react";
import Card from "../UI/Card";
import ServingItem from "./ServingItem";
import classes from "./ServingsList.module.css";

const ServingsList = (props) => {
  let selectedServing;
  const editServingHandler = (serving) => {
    selectedServing = serving;
    props.onServingSelected(selectedServing.price);
  };

  if (props.servings.length === 0) {
    return (
      <Card className={classes.servingslist__fallback}>
        <h2>Found no Servings</h2>
      </Card>
    );
  }
  return (
    <Card className={classes.servings}>
      <h2 className={classes.header}>Servings</h2>
      <ul>
        {props.servings.map((serving) => (
          <ServingItem
            key={serving.id}
            name={serving.name}
            price={serving.price}
            onClick={editServingHandler}
            serving={serving}
          
          />
        ))}
      </ul>
    </Card>
  );
};

export default ServingsList;
