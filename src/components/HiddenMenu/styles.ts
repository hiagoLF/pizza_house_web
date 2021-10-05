import styled from 'styled-components';

export const HiddenMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  #header {
    border-bottom-style: solid;
    border-bottom-color: #B5D0CC;
    border-bottom-width: 0.8px;
    width: 100%;
    display: flex;
    justify-content: left;
    margin-bottom: 20px;

    span {
      font-family: 'Sansita', sans-serif;
      font-size: 25px;
      color: #634545;
      margin-left: 10px;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  #menu-content {
    width: 100%;
    margin-bottom: 40px;
  }
`;
