import Spinner from './Spinner';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  animation: fadeOut 0.5s ease-in 1s forwards;

  @keyframes fadeOut {
    to {
      opacity: 0;
      display: none;
    }
  }
`;

const SpinnerFullPage = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default SpinnerFullPage;
