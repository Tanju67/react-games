import { createContext, useReducer } from "react";

export const GuessContext = createContext({
  guessGameState: {},
  onGuess: () => {},
  newGame: () => {},
});

const initialState = {
  secretNumber: Math.trunc(Math.random() * 20 + 1),
  guess: 2,
  lastGuess: 2,
  translateTime: 0,
  score: 20,
  highscore: 0,
  message: "start",
  isGameOver: false,
  status: "playing",
  newHighscore: false,
};

const guessReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GUESS":
      return {
        ...state,
        guess: action.payload,
        lastGuess: state.guess,
      };

    case "CALC_TRANSLATE":
      return { ...state, translateTime: action.payload - state.lastGuess };

    case "UPDATE_MSG":
      let msg;
      if (state.score > 1) {
        if (action.payload > state.secretNumber) {
          msg = "🔼 Too high!";
        } else if (action.payload < state.secretNumber) {
          msg = "🔻 Too low";
        } else {
          msg = "🎉 Correct!";
        }
      } else {
        msg = "💣 YOU LOST!";
      }

      return { ...state, message: msg };

    case "UPDATE_SCORE":
      if (action.payload === state.secretNumber) {
        return { ...state };
      }
      return { ...state, score: state.score > 0 ? state.score - 1 : 0 };

    case "UPDATE_ISGAMEOVER":
      if (action.payload === state.secretNumber) {
        return {
          ...state,
          isGameOver: true,
          highscore:
            state.highscore > state.score ? state.highscore : state.score,
          status: "win",
          newHighscore: state.highscore < state.score ? true : false,
        };
      }

      if (state.score === 0) {
        return {
          ...state,
          isGameOver: true,
          status: "lost",
        };
      }
      return state;

    case "NEW_GAME":
      return {
        ...initialState,
        secretNumber: Math.trunc(Math.random() * 20 + 1),
        highscore: state.highscore,
      };

    default:
      break;
  }
};

export const Provider = ({ children }) => {
  const [guessGameState, dispatch] = useReducer(guessReducer, initialState);

  const guessHandler = (input) => {
    if (+input < 1 || +input > 20) return;
    dispatch({ type: "UPDATE_GUESS", payload: +input });
    dispatch({ type: "CALC_TRANSLATE", payload: +input });
    dispatch({ type: "UPDATE_MSG", payload: +input });
    dispatch({ type: "UPDATE_SCORE", payload: +input });
    dispatch({ type: "UPDATE_ISGAMEOVER", payload: +input });
  };

  const newGame = () => {
    dispatch({ type: "NEW_GAME" });
  };

  return (
    <GuessContext.Provider
      value={{
        guessGameState: guessGameState,
        onGuess: guessHandler,
        newGame: newGame,
      }}
    >
      {children}
    </GuessContext.Provider>
  );
};
