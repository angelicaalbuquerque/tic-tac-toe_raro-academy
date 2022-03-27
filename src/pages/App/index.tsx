import { Board } from "../../components/Board";
import { Button } from "../../components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Board />
      <Button onClick={() => {}}>Play again!</Button>
    </div>
  );
}

export default App;
