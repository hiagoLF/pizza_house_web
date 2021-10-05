import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  background-color: #527983;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  font-family: "Secular One", sans-serif;
  font-size: 24px;

  h3 {
    font-weight: 100;
    color: #f9f9f9;
    width: 80%;
    margin: 20px 0 10px;
  }

  #buttons {
    margin: 10px 0 20px;
  }

  button {
    outline: none;
    border: none;
    color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    font-size: 24px;
    font-family: "Secular One", sans-serif;
  }

  #yes {
    background-color: #1d7016;
    margin-left: 10px;
  }

  #no {
    background-color: #b33634;
    margin-right: 10px;
  }
`;
