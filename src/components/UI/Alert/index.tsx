import React from 'react';

import { Container } from './styles';

type interfaceAlert = {
  state: boolean,
  emoji: string
  show: boolean
}

const Alert: React.FC<interfaceAlert> = ({state, emoji = '', show}) => {

  if(show === true){
    return (
      <Container >
        {
          state === true ? (
            <span>{emoji} Copiado com sucesso!</span>
          ) : (
            <span>Erro ao copiar emoji</span>
          )
        }
      </Container>
    );
  }else{
    return <div />
  }
}

export default Alert;