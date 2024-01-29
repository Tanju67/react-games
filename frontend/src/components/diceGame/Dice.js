import React, { useState } from "react";
import classes from "./Dice.module.css";

function Dice() {
  const [animation, setAnimation] = useState(false);
  const [rotation, setRotation] = useState("rotateX(0deg) rotateY(0deg)");
  const random = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    rollDice(random);
  };

  const rollDice = (random) => {
    setAnimation(true);
    setTimeout(() => {
      switch (random) {
        case 1:
          setRotation(" rotateX(0deg) rotateY(0deg)");
          break;

        case 6:
          setRotation(" rotateX(180deg) rotateY(0deg)");
          break;

        case 2:
          setRotation(" rotateX(-90deg) rotateY(0deg)");
          break;

        case 5:
          setRotation(" rotateX(90deg) rotateY(0deg)");
          break;

        case 3:
          setRotation(" rotateX(0deg) rotateY(90deg)");
          break;
        case 4:
          setRotation(" rotateX(0deg) rotateY(-90deg)");
          break;

        default:
          break;
      }
      setAnimation(false);
    }, 4030);
  };
  return (
    <div className={classes.container}>
      <div
        style={{ transform: rotation }}
        className={`${classes.dice} ${animation ? classes.animate : ""}`}
      >
        <div className={`${classes.face} ${classes.front}`}></div>
        <div className={`${classes.face} ${classes.back}`}></div>
        <div className={`${classes.face} ${classes.top}`}></div>
        <div className={`${classes.face} ${classes.bottom}`}></div>
        <div className={`${classes.face} ${classes.right}`}></div>
        <div className={`${classes.face} ${classes.left}`}></div>
      </div>
      <button onClick={random} className={classes.roll}>
        Roll Dice
      </button>
    </div>
  );
}

export default Dice;
