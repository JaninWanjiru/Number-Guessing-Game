import generateSecretNumber from "../utils/generateSecretNumber";

interface State {
  newGameBtnDisabled: boolean;
  inputReadOnly: boolean;
  guessBtnDisabled: boolean;
  feedback: string | null;
  numTrials: number;
  secretNumber: number | null;
  playerGuess: string;
}

type Action =
  | { type: "UPDATE_PLAYER_GUESS"; payload: string }
  | { type: "NEW_GAME" }
  | { type: "PLAYER_GUESS"; payload: string };

function gameReducer(state: State, action: Action): State {
  if (action.type === "UPDATE_PLAYER_GUESS") {
    return { ...state, playerGuess: action.payload };
  }

  if (action.type === "NEW_GAME") {
    return {
      ...state,
      newGameBtnDisabled: true,
      inputReadOnly: false,
      guessBtnDisabled: false,
      feedback: "Secret number generated. Take a guess",
      numTrials: 10,
      secretNumber: generateSecretNumber(),
      playerGuess: "",
    };
  }

  if (action.type === "PLAYER_GUESS") {
    const playerGuess = Number(action.payload);

    if (playerGuess === state.secretNumber) {
      return {
        ...state,
        newGameBtnDisabled: false,
        inputReadOnly: true,
        guessBtnDisabled: true,
        feedback: `You won and scored ${state.numTrials * 10}%`,
        secretNumber: state.secretNumber,
      };
    }

    const numTrials = state.numTrials - 1;

    if (numTrials === 0) {
      return {
        ...state,
        newGameBtnDisabled: false,
        inputReadOnly: true,
        guessBtnDisabled: true,
        feedback: `You lost. The secret number was ${state.secretNumber}`,
        numTrials: numTrials,
      };
    }

    if (playerGuess > state.secretNumber!) {
      return {
        ...state,
        feedback: `${playerGuess} is greater than the secret number`,
        numTrials: numTrials,
      };
    }

    if (playerGuess < state.secretNumber!) {
      return {
        ...state,
        feedback: `${playerGuess} is less than the secret number`,
        numTrials: numTrials,
      };
    }
  }

  return state;
}
export default gameReducer;
