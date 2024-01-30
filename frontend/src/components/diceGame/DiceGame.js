import React, { useContext, useState } from "react";
import classes from "./DiceGame.module.css";
import Button from "../UIElemets/Button";
import Card from "../UIElemets/Card";
import Dice from "./Dice";
import { DiceRollContext } from "../shared/context/diceRollContext";
import Player from "./Player";
import Modal from "../UIElemets/Modal";
import PlayerCount from "./PlayerCount";

function DiceGame() {
  const rollCtx = useContext(DiceRollContext);
  const [showModal, setShowModal] = useState(true);
  const [playerCount, setPlayerCount] = useState("");

  const onClickHandler = (e) => {
    setShowModal(false);
    setPlayerCount(e.target.textContent);
  };

  const players = [];

  for (let i = 0; i < playerCount; i++) {
    players.push(<Player key={i} index={i} />);
  }
  return (
    <div className={classes.game}>
      {showModal && (
        <Modal>
          <PlayerCount onClickHandler={onClickHandler} />
        </Modal>
      )}
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
        {players.map((player) => player)}
      </Card>
    </div>
  );
}

export default DiceGame;
