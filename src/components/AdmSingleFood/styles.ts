import styled from "styled-components";

export const AdmSingleFoodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(196, 196, 196, 0.2);
  border-radius: 5px;
  padding: 10px 0;
  margin-bottom: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-left: 10px;
  }

  #texts {
    margin: 0 5px;

    h3 {
      font-size: 18px;
      color: #b33634;
      font-family: "Sansita", sans-serif;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
      color: #5b8c98;
      font-family: "Secular One", sans-serif;
      font-weight: 100;
      margin-bottom: 5px;
    }
    span {
      font-size: 13px;
      color: #000;
      font-family: "Secular One", sans-serif;
      font-weight: 100;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    margin-right: 10px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
