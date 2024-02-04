import React from "react";
import classes from "./Games.module.css";
import pigGameImg from "../../assets/scrnli_2_2_2024_5-43-36 PM.png";
import guessGameImg from "../../assets/scrnli_2_5_2024_12-13-12 AM.png";
import Button from "../shared/UIElemets/Button";
import { NavLink } from "react-router-dom";

function Games() {
  return (
    <div className={classes.games}>
      <div className={classes.gameCard}>
        <div className={classes.imgBox}>
          <img src={pigGameImg} alt="games" />
        </div>
        <div className={classes.textBox}>
          <h2>Pig Game</h2>
          <Button>
            <NavLink to={"/dice-game"}>Play</NavLink>
          </Button>
        </div>
      </div>
      <div className={classes.gameCard}>
        <div className={classes.imgBox}>
          <img src={guessGameImg} alt="games" />
        </div>
        <div className={classes.textBox}>
          <h2>Guess Game</h2>
          <Button>
            <NavLink to={"/guess-game"}>Play</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Games;
