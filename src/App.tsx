import "./App.css";

function Game() {
  const newGameBtnDisabled = false;
  const inputReadOnly = false;
  const guessBtnDisabled = false;
  const numTrials = 10;
  const feedback = "New number generated, take a guess.";
  const playerGuess = "";

  return (
    <div className="game-container">
      <header className="game-header">
        <h2 className="game-instruction">
          Guess a number between 0 and 100
        </h2>
        <button
          className="new-game-btn"
          disabled={newGameBtnDisabled}>
          New Game
        </button>
      </header>

      <form className="game-form">
        <h2 className="trials-count">
          {numTrials} trials remaining
        </h2>
        <input
          type="number"
          placeholder="00"
          readOnly={inputReadOnly}
          value={playerGuess}
        />
        {feedback && <h2 className="game-result">{feedback}</h2>}
        <button
          className="guess-btn"
          type="button"
          disabled={guessBtnDisabled}
        >
          Guess
        </button>
      </form>
    </div>
  );
}

export default Game;
