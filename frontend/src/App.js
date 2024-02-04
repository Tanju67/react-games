import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiceGamePage from "./Pages/DiceGamePage";
import HomePage from "./Pages/HomePage";
import GamesPage from "./Pages/GamesPage";
import Index from "./Pages/Index";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import GuessGamePage from "./Pages/GuessGamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/dice-game" element={<DiceGamePage />} />
        <Route path="/guess-game" element={<GuessGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
