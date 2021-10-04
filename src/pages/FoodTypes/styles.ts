import styled from "styled-components";

export const FoodTypesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  #foods-type-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    #foods-header {
      color: #5b8c98;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 45px;
      font-family: 'Secular One', sans-serif;
    }

    #foods {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      .single-food {
        img {
          width: 113px;
          height: 113px;
        }

        #food-name {
          color: #b33634;
          font-family: 'Sansita', sans-serif;
        }
      }
    }
  }
`;
