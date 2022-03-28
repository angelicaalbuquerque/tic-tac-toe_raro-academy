import "./Board.css";
import "../Square";
import { Square } from "../Square";

export const Board = () => {
  return (
    <div className="Board">
      <div className="column">
        <Square dataCol={0} dataRow={0}></Square>
        <Square dataCol={0} dataRow={1}></Square>
        <Square dataCol={0} dataRow={2}></Square>
      </div>
      <div className="column">
        <Square dataCol={1} dataRow={0}></Square>
        <Square dataCol={1} dataRow={1}></Square>
        <Square dataCol={1} dataRow={2}></Square>
      </div>
      <div className="column">
        <Square dataCol={2} dataRow={0}></Square>
        <Square dataCol={2} dataRow={1}></Square>
        <Square dataCol={2} dataRow={2}></Square>
      </div>
    </div>
  );
};
