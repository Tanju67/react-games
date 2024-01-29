import React, { useContext } from "react";
import classes from "./DiceGame.module.css";
import Button from "../UIElemets/Button";
import Card from "../UIElemets/Card";
import Dice from "./Dice";
import { DiceRollContext } from "../shared/context/diceRollContext";

function DiceGame() {
  const rollCtx = useContext(DiceRollContext);
  return (
    <div className={classes.game}>
      <div className={classes["button-box"]}>
        <Button>New Game</Button>
        <Button>Game's Rule</Button>
      </div>
      <Card className={classes.container}>
        <div className={classes.diceBox}>
          <Button
            id={7}
            onClick={() => rollCtx.random()}
            className={classes.mainRollBtn}
          >
            🎲 Roll dice
          </Button>
          <Card className={classes.dice}>
            <Dice />
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default DiceGame;
