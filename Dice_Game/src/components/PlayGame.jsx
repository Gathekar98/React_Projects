import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollingDice from "./RollingDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any Number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollingDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        {showRules && <Rules />}
      </div>
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
