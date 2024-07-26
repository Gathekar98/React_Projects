/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error_msg">{error}</p>
      <div className="flex">
        {arrNumbers.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media screen and (max-width: 450px) {
  align-items: center;
}
  .error_msg {
    color: red;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 450px) {
  font-size: 15px;
  margin: 5px 0;
  }
  }
  .flex {
    display: flex;
    gap: 24px;
    @media screen and (max-width: 450px) {
   gap: 8px;
  }
  }
  p {
    font-size: 22px;
    font-weight: 600;
    margin: 15px 0;
    @media screen and (max-width: 450px) {
  font-size: 18px;
  margin: 5px;
}
  }

`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  @media screen and (max-width: 450px) {
   width: 40px;
   height: 40px;
   font-size:15px;
  }
`;
