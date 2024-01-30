import React from "react";
import classes from "./PlayerHeader.module.css";

function PlayerHeader({ index }) {
  return (
    <div className={`${classes.header} ${classes[`header--${index}`]}`}>
      <h2 className={classes.name} id="name--0">
        <span>Player</span>
        <span>{index + 1}</span>
      </h2>
      <p className={classes.score} id="score--0">
        0
      </p>
    </div>
  );
}

export default PlayerHeader;
