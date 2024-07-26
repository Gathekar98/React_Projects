import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

import "./App.css";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toogle={toogleGamePlay} />}</>
  );
}
export default App;
