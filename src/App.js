import React, { useState } from "react";
import "./App.css";
import Diners from "./Components/Diners/Diners";
import Servings from "./Components/Servings/Servings";
import Check from "./Components/Check/Check";
import HeadLogo from "./Components/General/HeadLogo";
import Tips from "./Components/Tip/Tips";

const App = () => {
  // Notes:
  // logo at every page
  // backdrop (not everypage) - white!
  // if no servings, dont show 'getCheck'
  const [isStart, setIsStart] = useState(true);
  const [isAddingDiners, setIsAddingDiners] = useState(true);
  const [diners, setDiners] = useState([]);
  const [isCheck, setIsCheck] = useState(false);

  const diners_Added = () => {
    if (diners.length === 0) {
      // Add Error modal
    } else {
      setIsAddingDiners(false);
    }
  };
  const startAppHandler = () => {
    setIsStart(false);
  };

  const addDinnerHandler = (uName) => {
    setDiners((prevDiners) => {
      return [
        ...prevDiners,
        {
          name: uName,
          amountToPay: 0,
          payWithTip: 0,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const getCheckHandler = () => {
    setIsCheck(true);
  };

  const finishDinningHandler = () => {
    setDiners([]);
    setIsAddingDiners(true);
    setIsCheck(false);
  };

  const addTipHandler = (tip) => {
    diners.map((dinner) => {
      dinner.payWithTip = dinner.amountToPay + (dinner.amountToPay * tip) / 100;
    });
  };

  return (
    <div className="App">
      {isStart && (
        <div>
          <HeadLogo />
          <div className="start">
            <button
              type="button"
              className="btnStart"
              onClick={startAppHandler}
            >
              Start
            </button>
          </div>
        </div>
      )}

      {!isStart && isAddingDiners && (
        <Diners
          onAddDinner={addDinnerHandler}
          onStopAddingDiners={diners_Added}
          diners={diners}
        />
      )}
      {!isAddingDiners && (
        <Servings diners={diners} onGetCheck={getCheckHandler} />
      )}
      {isCheck && (
        <Check
          title="Here's the Check!"
          diners={diners}
          onFinishDinnig={finishDinningHandler}
          onAddTip={addTipHandler}
        />
      )}
    </div>
  );
};

export default App;
