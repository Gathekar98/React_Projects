/* eslint-disable react/prop-types */
import styled from "styled-components";
const RollingDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/Images/Dice/dice_${currentDice}.png`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollingDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 450px) {
    margin-top: 5px;
  }
  .dice {
    cursor: pointer;
  }

  img {
    width: 180px;
    height: 180px;
    @media screen and (max-width: 450px) {
      width: 100px;
      height: 100px;
    }
  }
  p {
    margin: 5px 0;
    font-size: 22px;
    @media screen and (max-width: 450px) {
 font-size :16px;
}
}
`;
