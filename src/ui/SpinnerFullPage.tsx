import Spinner from './Spinner';
import styled from 'styled-components';

interface ContainerProps {
  wifi?: boolean;
}

const Container = styled.div<ContainerProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.5s;

  animation: ${(props) => (props.wifi ? 'fadeOut 0.5s ease-in 0.5s forwards' : '')};
  @keyframes fadeOut {
    to {
      opacity: 0;
      display: none;
    }
  }
`;

Container.defaultProps = {
  wifi: false,
};

const SpinnerFullPage = ({ wifi }: ContainerProps) => {
  return (
    <Container wifi={wifi}>
      <Spinner />
    </Container>
  );
};

export default SpinnerFullPage;
