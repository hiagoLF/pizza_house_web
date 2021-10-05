import styled from "styled-components";

export const OrderedFoodCardContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: rgba(196, 196, 196, 0.2);
  display: flex;
  padding: 10px 0;
  margin-bottom: 20px;
  justify-content: space-between;
  

  #texts-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;    

    h3 {
      font-size: 18px;
      font-family: "Sansita", sans-serif;
      color: #b33634;
      margin-bottom: 5px;
    }

    p {
      font-size: 12px;
      font-family: "Sansita", sans-serif;
      color: #5b8c98;
      text-align: left;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      font-weight: 100;
      font-family: "Secular One", sans-serif;
    }
  }

  .buttons-container {
    display: flex;
    flex-direction: column;

    button {
      border: none;
      background-color: rgba(0,0,0,0);
      outline: none;
      margin: 5px;
    }
  }
`;
