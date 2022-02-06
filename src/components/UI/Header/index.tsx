import React from 'react';

import { Container } from './styles';
import logo from '/imagens/logo.svg';

interface InterfaceHeader  {
  toggleLanguage : () => void,
  language: string
}
const Header: React.FC<InterfaceHeader> = ({toggleLanguage, language} ) => {
  return (
  <Container>
    <div className="brand">
      <img src={logo} alt="Search emoji logo" />
    </div>
    <div className="language">
      <button onClick={toggleLanguage}>{language}</button>
    </div>
  </Container>
  );
};

export default Header;
