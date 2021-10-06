import styled from "styled-components";

type FoodsSelectContainerProps = {
  isSelectOpen: boolean;
};

export const FoodsSelectContainer = styled.div<FoodsSelectContainerProps>`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    color: #b33634;
    font-family: "Sansita", sans-serif;
    margin-left: 10px;
  }

  #select {
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: flex-start;
    border-bottom-color: #b5d0cc;
    border-bottom-width: 0.8px;
    border-bottom-style: solid;
    width: 100%;
    cursor: pointer;

    img {
      height: 25px;
      width: 25px;
      margin-left: 5px;
      transform: ${({ isSelectOpen }) =>
        isSelectOpen ? "rotate(0)" : "rotate(-90deg)"};
      transition-duration: 500ms;
    }

    span {
      font-family: "Secular One", sans-serif;
      color: #5b8c98;
      font-size: 15px;
    }
  }

  #select-options {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(181, 208, 204, 0.3);
    overflow-y: hidden;
    height: ${({ isSelectOpen }) => (isSelectOpen ? 144: 0)}px;
    transition-duration: 500ms;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    button {
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      border-bottom-style: solid;
      border-bottom-color: #5b8c98;
      border-bottom-width: 1px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      cursor: pointer;

      &:hover {
        background-color: #B5D0CC;
      }

      span {
        font-family: "Secular One", sans-serif;
        color: #5b8c98;
        font-size: 15px;
        margin-left: 30px;
        margin-top: 15px;
        margin-bottom: 5px;
      }
    }
  }
`;
