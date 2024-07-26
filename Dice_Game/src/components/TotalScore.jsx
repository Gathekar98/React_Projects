/* eslint-disable react/prop-types */
import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 70px;
    @media screen and (max-width: 450px) {
  font-size: 50px;
  line-height: 60px;
}  
  }
  p {
    font-size: 22px;
    font-weight: 600;
    margin: 0;
    @media screen and (max-width: 450px) {
  font-size: 20px;
}
  }
`;