import React, { useRef, useState } from 'react';

import { Container } from './styles';
import copyEmoji from '../../lib/copyEmoji';
import Alert from '../Alert';

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
  index?: boolean
};

const EmojiGroup: React.FC<typeEmojiGroup> = ({ emojis, title, index }) => {

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [emojy, setEmojy] = useState<string>('');

  function alertCopyEmoji(emoji : string){
    copyEmoji(emoji);
    setShowAlert(true);
    setEmojy(emoji)

    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

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
              <div key={index} className="emoji" onClick={() => alertCopyEmoji(item.char)}>
                {item.char}
              </div>
            );
          }
        })}
      </div>
      <Alert state={true} show={showAlert} emoji={emojy}/>
    </Container>
  );
};

export default EmojiGroup;
