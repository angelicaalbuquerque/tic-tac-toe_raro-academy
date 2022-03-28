import { useState, Dispatch, SetStateAction, useEffect } from "react";
import "./Square.css";

interface SquareProps {
  className: string;
  whosPlaying: string;
  setWhosPlaying: Dispatch<SetStateAction<string>>;
  localization: number;
  setPlayer1: Dispatch<SetStateAction<number[]>>;
  player1: number[];
  setPlayer2: Dispatch<SetStateAction<number[]>>;
  player2: number[];
  winner: boolean;
  restart: boolean;
  setRestart: Dispatch<SetStateAction<boolean>>;
}

const Square = ({
  className,
  whosPlaying,
  setWhosPlaying,
  localization,
  setPlayer1,
  player1,
  setPlayer2,
  player2,
  winner,
  restart,
  setRestart,
}: SquareProps) => {
  const [XorCircle, setXorCircle] = useState("");

  useEffect(() => {
    setXorCircle("");
    setRestart(false);
  }, [restart]);

  const play = () => {
    if (XorCircle === "" && whosPlaying === "X" && winner === false) {
      setXorCircle("X");
      setWhosPlaying("O");
      setPlayer1([...player1, localization]);
    } else if (XorCircle === "" && whosPlaying === "O" && winner === false) {
      setXorCircle("O");
      setWhosPlaying("X");
      setPlayer2([...player2, localization]);
    }
  };

  return (
    <div className={className} onClick={play}>
      {XorCircle}
    </div>
  );
};

export default Square;
