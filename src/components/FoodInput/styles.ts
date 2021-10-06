import styled from "styled-components";

export const FoodInputContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  label {
    font-size: 18px;
    color: #b33634;
    font-family: "Sansita", sans-serif;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  #input-container {
    width: 100%;
    display: flex;

    #text-input {
      text-align: left;
      padding: 10px;
      font-family: "Secular One", sans-serif;
      color: #5b8c98;
      font-size: 15px;
      width: fit-content;
      flex: 1;
      border-radius: 5px;
      background-color: rgba(0,0,0,0);
      border: 1px solid #B5D0CC;

      &::placeholder {
        color: #000000;
        opacity: 0.2;
      }
    }
  }
`;
