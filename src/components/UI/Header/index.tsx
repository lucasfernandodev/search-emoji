import React from 'react';

import { Container } from './styles';
import logo from '/imagens/logo.svg';

interface InterfaceHeader  {
  toggleLanguage : () => void,
  lang: string
}
const Header: React.FC<InterfaceHeader> = ({toggleLanguage, lang} ) => {
  return (
  <Container>
    <div className="brand">
      <img src={logo} alt="Search emoji logo" />
    </div>
    <div className="language">
      <button onClick={toggleLanguage}>{lang}</button>
    </div>
  </Container>
  );
};

export default Header;
