import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  margin: 50px;
  background-color: #fbf1f1;
  max-width: 700px;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 450px) {
    margin: 15px;
    p{@media screen and (max-width: 450px) {
margin: 0;
    }}
      }
  h2 {
    font-size: 24px;
    margin: 0;
    @media screen and (max-width: 450px) {
font-size: 15px;
margin-bottom: 8px;
    }
  }
  .text {
    margin-top: 24px;
    @media screen and (max-width: 450px) {
font-size: 12px;
margin: 0;
    }
  }
`;
