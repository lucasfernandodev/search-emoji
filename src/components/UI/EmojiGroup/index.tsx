import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import copyEmoji from '../../lib/copyEmoji';
import Alert from '../Alert';
import Text from '../../../store/Text';
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
  index?: boolean;
  expandShow?: boolean;
  all?: boolean;
  lang: string;
};

const EmojiGroup: React.FC<typeEmojiGroup> = ({
  emojis,
  title,
  index,
  expandShow,
  all,
  lang,
}) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [emojy, setEmojy] = useState<string>('');
  const [expand, setExpand] = useState<boolean>(false);

  useEffect(() => {
    if (all === true) {
      setExpand(true);
    }
  }, []);

  function alertCopyEmoji(emoji: string) {
    copyEmoji(emoji);
    setShowAlert(true);
    setEmojy(emoji);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <Container>
      <div className="header">
        <h2 className="title">{title}</h2>
        {expandShow !== false && (
          <button
            onClick={() =>
              expand === true ? setExpand(false) : setExpand(true)
            }
          >
            {Text[lang].buttonMoreEmoji}
          </button>
        )}
      </div>

      <div className="container">
        {emojis.map((item, index) => {
          if (expand !== true) {
            if (index < 24) {
              return (
                <div
                  key={index}
                  className="emoji"
                  onClick={() => alertCopyEmoji(item.char)}
                >
                  {item.char}
                </div>
              );
            }
          } else {
            return (
              <div
                key={index}
                className="emoji"
                onClick={() => alertCopyEmoji(item.char)}
              >
                {item.char}
              </div>
            );
          }
        })}
      </div>
      <Alert lang={lang} state={true} show={showAlert} emoji={emojy} />
    </Container>
  );
};

export default EmojiGroup;
