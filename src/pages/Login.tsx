import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';
import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  display: flex;
  min-height: 100dvh;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-grey-50);
`;

const StyledLogin = styled.div``;

const Login = () => {
  return (
    <LoginLayout>
      <StyledLogin>
        <Logo />
        <Heading as="h4">Log in to your account</Heading>
        <LoginForm />
      </StyledLogin>
    </LoginLayout>
  );
};

export default Login;
