import styled from 'styled-components';

export const BottomCardContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #F6F4E8;
  display: flex;

  #bottom-card-content {
    background-color: #2F565E;
    width: 85%;
    border-radius: 10px;
    display: flex;
    font-family: 'Secular One', sans-serif;
    color: #F9F9F9;
    justify-content: space-between;
    padding: 10px 10px;

    h2 {
      font-size: 24px;
    }

    #next {
      display: flex;

      span {
        font-size: 18px;
      }
    }
  }
`;
