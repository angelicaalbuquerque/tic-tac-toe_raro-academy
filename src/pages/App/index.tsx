import { Board } from "../../components/Board";
import { Button } from "../../components/Button";
import { GameState } from "../../components/GameState";
import "./App.css";

function App() {
  const { gamePlay, checkWin, announceWinner } = GameState();

  return (
    <div className="App">
      <h1 className="Title">Tic-Tac-Toe</h1>
      <Board />
      <div className="BtnContainer">
        <Button onClick={() => {}}>Play again!</Button>
      </div>
    </div>
  );
}

export default App;
