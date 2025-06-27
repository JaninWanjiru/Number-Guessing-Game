import { useReducer } from "react";
import gameReducer from "./reducers/gameReducer";
import "./App.css";

function Game() {
  const [state, dispatch] = useReducer(gameReducer, {
  newGameBtnDisabled: false,
  inputReadOnly: true,
  guessBtnDisabled: true,
  numTrials: 0,
  feedback: null,
  secretNumber: null,
  playerGuess: "",
  });

  return (
    <div className="game-container">
      <header className="game-header">
        <h2 className="game-instruction">
          Guess a number between 0 and 100
        </h2>
        <button
          className="new-game-btn"
          disabled={state.newGameBtnDisabled}
          onClick={() => dispatch({ type: "NEW_GAME" })}>
          New Game
        </button>
      </header>

      <form className="game-form">
        <h2 className="trials-count">
          {state.numTrials} trials remaining
        </h2>
        <input
          type="number"
          placeholder="00"
          readOnly={state.inputReadOnly}
          value={state.playerGuess}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PLAYER_GUESS",
              payload: e.target.value,
            })
          }
        />
        {state.feedback && <h2 className="game-result">{state.feedback}</h2>}
        <button
          className="guess-btn"
          type="button"
          disabled={state.guessBtnDisabled}
          onClick={() => dispatch({ type: "PLAYER_GUESS", payload: state.playerGuess })}
        >
          Guess
        </button>
      </form>
    </div>
  );
}

export default Game;
