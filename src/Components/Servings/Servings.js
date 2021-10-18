import React, { useState } from "react";
import ChoosingDiners from "../General/ChoosingDiners";
import classes from "./Serving.module.css";
import AddServing from "./AddServing";
import ServingsList from "./ServingsList";

const Servings = (props) => {
  const [servings, setServings] = useState([]);
  const [servingPrice, setServingPrice] = useState();
  const [chosen, setChosen] = useState(false);

  const addServingHandler = (uName, uPrice) => {
    setServings((prevServings) => {
      return [
        ...prevServings,
        { name: uName, price: uPrice, id: Math.random().toString() },
      ];
    });
  };

  const servingSelectedHandler = (price) => {
    if (!chosen) {
      setChosen(true);
      setServingPrice(price);
    }
  };

  const submitServingHandler = (chosenDiners, length) => {
    setChosen(false);
    props.diners.map((dinner) => {
      const found = chosenDiners.find(
        (chosenDinner) => chosenDinner.dinner.id === dinner.id
      );
      if (found) {
        dinner.amountToPay += servingPrice / length;
      }
    });
  };

  const getCheckHandler = () => {
    setServings([]);
    // add a check if all servings were selected.
    props.onGetCheck();
  };

  return (
    <div>
      <AddServing onAddServing={addServingHandler} />
      <div className={classes.divbtn}>
        <button className={classes.check_button} onClick={getCheckHandler}>
          Get Check
        </button>
      </div>
      <ServingsList
        servings={servings}
        onServingSelected={servingSelectedHandler}
      />
      {chosen && (
        <ChoosingDiners
          diners={props.diners}
          title="Choose diners"
          onSubmitServing={submitServingHandler}
        />
      )}
    </div>
  );
};
export default Servings;
