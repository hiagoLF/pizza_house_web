import styled from "styled-components";

export const FoodItemComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-bottom: 10px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 10px;
  }

  #texts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;

    h3{
      font-family: 'Sansita', sans-serif;
      color: #B33634;
      font-size: 18px;
      margin-bottom: 5px;
      display: flex;
      text-align: left;


      img {
        width: 24px;
        height: 24px;
        margin-left: 10px;
      }
    }

    #description {
      font-family: 'Sansita', sans-serif;
      color: #5B8C98;
      font-size: 12px; 
      text-align: left;
 
    }

    #value {
      font-family: 'Secular One', sans-serif;
      color: #000;
      font-size: 13px;  
      margin-top: 5px;

    }
  }
`;
