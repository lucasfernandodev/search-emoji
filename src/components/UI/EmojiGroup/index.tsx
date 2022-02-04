import React from 'react';

import { Container } from './styles';
import copyEmoji from '../../lib/copyEmoji';

interface interfaceEmojiGroup {
  codes: string;
  char: any;
  name: string;
  category: string;
  group: string;
  subgroup?: string;
}

type typeEmojiGroup = {
  emojis: Array<interfaceEmojiGroup>;
  title: string;
};

const EmojiGroup: React.FC<typeEmojiGroup> = ({ emojis, title }) => {
  return (
    <Container>
      <div className="header">
        <h2 className="title">{title}</h2>
        <button>Expandir</button>
      </div>

      <div className="container">
        {emojis.map((item, index) => {
          if (index < 24) {
            return (
              <div key={index} className="emoji" onClick={() => copyEmoji(item.char)}>
                {item.char}
              </div>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default EmojiGroup;
