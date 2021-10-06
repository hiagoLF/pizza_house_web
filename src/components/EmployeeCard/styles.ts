import styled from "styled-components";

export const EmployeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 10px;
  }

  #texts {
    font-family: "Secular One", sans-serif;
    font-size: 12px;
    text-align: left;

    h3 {
      font-family: "Sansita", sans-serif;
      font-size: 18px;
      color: #cc4748;
      margin-bottom: 5px;
    }
    span {
      color: #527983;
    }
    h4 {
      color: #000000;
      margin-top: 5px;
      text-align: left;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);

    img {
      width: 24px;
      height: 24px;
    }

    margin-right: 10px;
  }
`;
