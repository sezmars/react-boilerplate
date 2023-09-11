import styled from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const logoPath = import.meta.env.DEV ? '/' : '/react-boilerplate/';

  const src = isDarkMode ? `${logoPath}logo-dark.png` : `${logoPath}logo-light.png`;

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
