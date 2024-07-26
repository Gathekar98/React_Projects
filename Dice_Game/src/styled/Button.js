import styled from "styled-components";

export const Button = styled.button`
  @media screen and (max-width: 450px) {
   width: 150px;  
   padding:6px 8px; 
   float: left;
    border: 1px solid black;
    &:hover {
      background-color: black;
      color: white;
      transition: 0.2s ease-in;
    }
  }
  float: right;
  width: 220px;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 10px 18px;
  transition: 0.2s ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
  
`;
