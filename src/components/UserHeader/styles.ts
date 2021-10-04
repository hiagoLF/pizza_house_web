import styled from "styled-components";

export const UserHeaderContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom-color: #b5d0cc;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 10px;

  #profile {
    display: flex;
    margin-left: 10px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }

    #description {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      font-family: "Sansita", sans-serif;
      align-items: flex-start;

      h3 {
        color: #527983;
      }

      #name {
        color: #cc4748;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  #table-num {
    font-size: 14px;
    margin-right: 10px;
  }
`;
