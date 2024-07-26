/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: 20px;
    img {
      width: 300px;
          }
    .content {
      h1 {
        text-shadow: 6px 5px 6px gray;
        text-align: center;
        margin: 10px 0;
        font-size: 35px;
      }
    }
  }

  h1 {
    font-size: 70px;
    white-space: nowrap;
    margin: 0px;
  }
`;

const StartGame = ({ toogle }) => {
  return (
    <>
      <Container>
        <div>
          <img src="/Images/game-image.png" alt="dice game logo"></img>
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toogle}>Play Game</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;
