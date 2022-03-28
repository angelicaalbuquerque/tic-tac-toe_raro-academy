import { Square } from "../Square";
import { useState } from "react";

export const GameState = () => {
  const [boardGame, setboardGame] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  let player = "X";

  const gamePlay = (dataRow: any, dataCol: any) => {
    const play = () => {
      boardGame[dataRow][dataCol] = player;
      if (checkWin()) {
        announceWinner();
        return;
      }
      player = player === "X" ? "O" : "X";
    };
  };

  let squares = document.querySelectorAll("square");

  const checkWin = () => {
    for (let i = 0; i < boardGame.length; i++) {
      if (
        boardGame[i][0] === boardGame[i][1] &&
        boardGame[i][1] === boardGame[i][2]
      ) {
        return boardGame[i][0];
      }
    }
    for (let i = 0; i < boardGame.length; i++) {
      if (
        boardGame[0][i] === boardGame[1][i] &&
        boardGame[1][i] === boardGame[2][i]
      ) {
        return boardGame[0][i];
      }
    }
    if (
      boardGame[0][0] === boardGame[1][1] &&
      boardGame[1][1] === boardGame[2][2]
    ) {
      return boardGame[0][0];
    }
    if (
      boardGame[0][2] === boardGame[1][1] &&
      boardGame[1][1] === boardGame[2][0]
    ) {
      return boardGame[0][2];
    }
    return false;
  };

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      let dataRow = square;
      let dataCol = square;

      if (square.textContent == "") {
        square.textContent = player;
        gamePlay(dataRow, dataCol);
      }
    });
  });

  const announceWinner = () => {
    console.log(`${player} wins!`);
  };

  return {
    gamePlay,
    checkWin,
    announceWinner,
  };
};
