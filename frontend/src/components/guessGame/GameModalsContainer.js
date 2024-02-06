import React, { useContext } from "react";
import Modal from "../shared/UIElemets/Modal";
import classes from "./GameModalsContainer.module.css";
import { GuessContext } from "../shared/context/guessGameContext";
import Button from "../shared/UIElemets/Button";

function GameModalsContainer({ newGame, setInput }) {
  const { status, newHighscore, highscore, score } =
    useContext(GuessContext).guessGameState;
  return (
    <Modal className={classes.guessModal}>
      <h2>{status === "win" ? "🎉 YOU WON 🎉" : "💣 YOU LOST 💣"}</h2>

      {status === "win" && newHighscore && (
        <p>
          <span>Your New Highscore: </span> {highscore}
        </p>
      )}

      {!newHighscore && (
        <p>
          <span>Your Score: </span> {score}
        </p>
      )}

      <Button
        onClick={() => {
          newGame();
          setInput("");
        }}
      >
        Play Again
      </Button>
    </Modal>
  );
}

export default GameModalsContainer;
