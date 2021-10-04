import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  font-family: "Sansita", sans-serif;

  #login-content{
    h1 {
      color: #CC4748;
      font-size: 36;
      margin-bottom: 66px;
    }

    #google-login{

      display: flex;
      flex-direction: column;

      span {
        color: #527983;
        font-size: 18px;

        margin-bottom: 10px;
      }

    }
  }
`;
