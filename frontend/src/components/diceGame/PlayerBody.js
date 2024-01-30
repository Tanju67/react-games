import React from "react";
import classes from "./PlayerBody.module.css";
import Button from "../UIElemets/Button";

function PlayerBody({ index }) {
  return (
    <div className={`${classes.body} ${classes[`body--${index}`]} `}>
      <div className={classes.current}>
        <p className={classes["current-label"]}>Current</p>
        <p className={classes["current-score"]} id={`current--${index}`}>
          {/* {currentValue[index].currentScore} */}
        </p>
      </div>
      <div className={classes.btns}>
        <Button
          id={index}
          onClick={null}
          className={`${classes.btn} ${classes["btn--roll"]}`}
          data-btn="0"
        >
          🎲 Roll dice
        </Button>
        <Button
          id={index}
          className={`${classes.btn} ${classes["btn--hold"]}`}
          onClick={null}
          data-btn="0"
        >
          📥 Hold
        </Button>
      </div>
    </div>
  );
}

export default PlayerBody;
