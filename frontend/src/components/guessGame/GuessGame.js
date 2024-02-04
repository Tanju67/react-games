import React, { useContext, useState } from "react";
import classes from "./GuessGame.module.css";
import Card from "../shared/UIElemets/Card";
import Button from "../shared/UIElemets/Button";
import { GuessContext } from "../shared/context/guessGameContext";
import Modal from "../shared/UIElemets/Modal";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function GuessGame() {
  const [input, setInput] = useState("");
  const { onGuess, newGame, guessGameState } = useContext(GuessContext);
  const {
    isGameOver,
    guess,
    translateTime,
    message,
    score,
    highscore,
    status,
    newHighscore,
  } = guessGameState;

  return (
    <div className={classes.guess}>
      <NavLink to={"/"}>
        <FaHome />
      </NavLink>
      {isGameOver && (
        <Modal className={classes.guessModal}>
          <h2>{status === "win" ? "🎉 YOU WON 🎉" : "💣 YOU LOST 💣"}</h2>
          {status === "win" && newHighscore && (
            <p>
              Your<span> New Highscore: </span> {highscore}
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
      )}
      <div className={classes.gameActions}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="number"
          placeholder="Enter Guess (1-20)"
        />
        <Button onClick={() => onGuess(input)} className={classes.btn}>
          Guess
        </Button>
      </div>
      <Card className={classes.container}>
        <div
          style={{
            transform: `translateX(${-34 * (guess - 1)}rem)`,
            transition: `all ${Math.abs(translateTime) * 0.3}s `,
          }}
          className={classes.gameCards}
        >
          {Array.from({ length: 22 }, (v, i) => i).map((item) => (
            <div key={item} className={classes.gameCard}>
              {+item === +guess && score < 20 && (
                <span className={+item === +guess ? classes.activeMsg : ""}>
                  {message}
                </span>
              )}
              {item === 0 && (
                <div>
                  <span>20</span>
                </div>
              )}
              {item === 21 && (
                <div>
                  <span>1</span>
                </div>
              )}
              {item !== 0 && item !== 21 && (
                <div
                  id={item}
                  style={{
                    backgroundColor: `var(--clr${item % 6})`,
                  }}
                >
                  <span className={+item === +guess ? classes.active : ""}>
                    {item}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={classes.scoreBox}>
          <p>
            <span>💯 Score: </span>
            {score}
          </p>
          <p>
            <span>🥇 Highscore: </span>
            {highscore}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default GuessGame;
