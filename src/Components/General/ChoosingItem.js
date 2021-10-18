import React, { useState } from "react";
import classes from "./ChoosingItem.module.css";
const ChoosingItem = (props) => {
  const [isClick, setIsClick] = useState(false);

  const dinnerSelectedHandler = () => {
    if (!isClick) {
      setIsClick(true);
      props.onSelected(props.dinner);
    } else {
      return;
    }
  };

  return (
    <li
      className={`${classes.item} ${isClick && classes.disable}`}
      key={props.dinner.id}
      onClick={dinnerSelectedHandler}
    >
      {props.dinner.name}
    </li>
  );
};

export default ChoosingItem;
