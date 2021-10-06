import styled from "styled-components";

export const FoodImageInputContainer = styled.button.attrs({
  type: "button",
})`
  width: 95%;
  display: flex;
  padding: 10px 0;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px #b5d0cc solid;
  border-radius: 5px;


  #preview {
    height: 100px;
    width: 100px;
  }

  input {
    display: none;
  }

  img {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
`;
