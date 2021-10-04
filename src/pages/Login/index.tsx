import { LoginPageContainer } from "./styles";
import GoogleLogin from "react-google-login";

const Login: React.FC = () => {
  return (
    <LoginPageContainer>
      <div id="login-content">
        <h1>Pizza House</h1>

        <div id="google-login">
          <span>Entre com sua conta do Google</span>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login com o Google"
            onSuccess={() => alert('Google Login')}
            onFailure={() => alert('Google Login')}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </LoginPageContainer>
  );
};

export default Login;
