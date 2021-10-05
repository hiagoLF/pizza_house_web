import styled from 'styled-components';

export const AdministrationNavigatorContainer = styled.div`
  width: 95%;

  border-bottom-color: #B5D0CC;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-top-color: #B5D0CC;
  border-top-width: 2px;
  border-top-style: solid;

  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;

  padding: 5px 0;

  .navigator-item {
    font-family: 'Sansita', sans-serif;
    color: #527983;
    padding: 10px 20px;

    border-right-width: 2px;
    border-right-color: #B5D0CC;
    border-right-style: solid;
  }

  .unselected {
    opacity: 0.5;
    font-size: 14px;
  }

  .selected {
    font-size: 20px;
  }
`;
