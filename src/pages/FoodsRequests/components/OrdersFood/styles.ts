import styled from 'styled-components';

export const OrderItensContainer = styled.div`
  width: 90%;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  #header {
    display: flex;
    width: 100%;
    justify-content: left;
    margin-top: 30px;
    border-bottom-width: 0.8px;
    border-bottom-style: solid;
    border-bottom-color: #B5D0CC;

    img {
      height: 30px;
      width: 30px;
      margin-left: 10px;
    }

    h3 {
      font-family: 'Sansita', sans-serif;
      font-size: 18px;
      color: #B33634;
    }
  }

  #foods {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;
