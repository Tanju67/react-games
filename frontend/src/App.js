import DiceGame from "./components/diceGame/DiceGame";
import { Provider } from "./components/shared/context/diceRollContext";
import { Provider as GameProvider } from "./components/shared/context/gameContext";

function App() {
  return (
    <div className="App">
      <Provider>
        <GameProvider>
          <DiceGame />
        </GameProvider>
      </Provider>
    </div>
  );
}

export default App;
