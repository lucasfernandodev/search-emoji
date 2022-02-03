import React from 'react';

import { Container } from './styles';
import logo from '/imagens/logo.svg';
const Header: React.FC = () => {
  return (
  <Container>
    <div className="brand">
      <img src={logo} alt="Search emoji logo" />
    </div>
    <div className="language">
      <button>PT-BR</button>
    </div>
  </Container>
  );
};

export default Header;
