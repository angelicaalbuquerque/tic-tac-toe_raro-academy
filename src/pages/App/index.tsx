import "./App.css";
import Square from "../../components/Square";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [player1, setPlayer1] = useState<number[]>([]);
  const [player2, setPlayer2] = useState<number[]>([]);
  const [whosPlaying, setWhosPlaying] = useState("X");

  const [winner, setWinner] = useState(false);

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (player1.includes(1) && player1.includes(2) && player1.includes(3)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(1) && player2.includes(2) && player2.includes(3)) {
      return setWinner(true), setWhosPlaying("O");
    }

    if (player1.includes(4) && player1.includes(5) && player1.includes(6)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(4) && player2.includes(5) && player2.includes(6)) {
      return setWinner(true), setWhosPlaying("O");
    }
    if (player1.includes(7) && player1.includes(8) && player1.includes(9)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(7) && player2.includes(8) && player2.includes(9)) {
      return setWinner(true), setWhosPlaying("O");
    }
    if (player1.includes(1) && player1.includes(4) && player1.includes(7)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(1) && player2.includes(4) && player2.includes(7)) {
      return setWinner(true), setWhosPlaying("O");
    }
    if (player1.includes(2) && player1.includes(5) && player1.includes(8)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(2) && player2.includes(5) && player2.includes(8)) {
      return setWinner(true), setWhosPlaying("O");
    }
    if (player1.includes(3) && player1.includes(6) && player1.includes(9)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(3) && player2.includes(6) && player2.includes(9)) {
      return setWinner(true), setWhosPlaying("O");
    }
    if (player1.includes(1) && player1.includes(5) && player1.includes(9)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(1) && player2.includes(5) && player2.includes(9)) {
      return setWinner(true), setWhosPlaying("O");
    }
    if (player1.includes(3) && player1.includes(5) && player1.includes(7)) {
      return setWinner(true), setWhosPlaying("X");
    }
    if (player2.includes(3) && player2.includes(5) && player2.includes(7)) {
      return setWinner(true), setWhosPlaying("O");
    }
  }, [player1, player2]);

  const playAgain = () => {
    setWinner(false);
    setPlayer1([]);
    setPlayer2([]);
    setRestart(true);
  };

  return (
    <Fragment>
      <h1 className="Title">Tic-Tac-Toe</h1>
      {winner && <h2 className="Subtitle">Player "{whosPlaying}" Winner!</h2>}

      <div className="FirstLine">
        <Square
          className="firstSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={1}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
        <Square
          className="secondSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={2}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
        <Square
          className="thirdSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={3}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
      </div>

      <div className="SecondLine">
        <Square
          className="fourthSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={4}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
        <Square
          className="fifthSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={5}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
        <Square
          className="sixthSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={6}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
      </div>

      <div className="ThirdLine">
        <Square
          className="seventhSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={7}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
        <Square
          className="eighthSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={8}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
        <Square
          className="ninthSquare"
          whosPlaying={whosPlaying}
          setWhosPlaying={setWhosPlaying}
          localization={9}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          restart={restart}
          setRestart={setRestart}
        />
      </div>

      <div className="BtnContainer">
        <button onClick={playAgain}>Play again!</button>
      </div>
    </Fragment>
  );
}

export default App;
