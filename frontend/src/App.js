import DiceGame from "./components/diceGame/DiceGame";
import { Provider } from "./components/shared/context/diceRollContext";

function App() {
  return (
    <div className="App">
      <Provider>
        <DiceGame />
      </Provider>
    </div>
  );
}

export default App;
