import React from 'react';

import { Container } from './styles';

type interfaceAlert = {
  state: boolean;
  emoji: string;
  show: boolean;
  lang: string;
};

const Alert: React.FC<interfaceAlert> = ({ state, emoji = '', show, lang }) => {
  interface interfaceText {
    [key: string]: {
      [key: string]: string;
    };
  }
  const text: interfaceText = {
    sucess: {
      PT: 'Copiado com sucesso!',
      EN: 'Copied successfully!',
    },
    error: {
      PT: 'Erro ao copiar emoji',
      EN: 'Error copying emoji',
    },
  };

  if (show === true) {
    return (
      <Container>
        {state === true ? (
          <span>
            {emoji}
            {text.sucess[lang]}
          </span>
        ) : (
          <span>{text.error[lang]}</span>
        )}
      </Container>
    );
  } else {
    return <div />;
  }
};

export default Alert;
