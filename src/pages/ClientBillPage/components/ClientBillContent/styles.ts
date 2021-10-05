import styled from "styled-components";

export const ClientBillContentContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: flex-start;

  .bill-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    #texts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 10px;

      h3 {
        color: #b33634;
        font-family: "Sansita", sans-serif;
        font-size: 18px;
        margin-bottom: 3px;
      }

      span {
        color: #5b8c98;
        font-family: "Secular One", sans-serif;
        font-size: 18px;
        font-weight: 100;
      }
    }

    button {
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      margin-right: 10px;
    }
  }

  #bill-resume {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 30px;

    .resume-item {
      display: flex;
      margin-left: 10px;
      margin-bottom: 5px;
      font-size: 18px;

      
      h3 {
        font-family: "Sansita", sans-serif;
        color: #B33634;
      }

      span {
        font-family: "Secular One", sans-serif;
        color: #5B8C98;
        padding-top: 6px;
        margin-left: 5px;
      }
    }
  }
`;
