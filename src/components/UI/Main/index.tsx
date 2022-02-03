import React from 'react';

import { Container, Welcome, Wrapper } from './styles';
import iconSearch from '/public/imagens/search.svg';

import emojiJson from '../../../store/emoji.json';
import EmojiGroup from '../EmojiGroup';
import filterEmojisByGroup from '../../lib/filterEmojisByGroup';

interface interfaceEmojis {
  codes: string;
  char: any;
  name: string;
  category: string;
  group: string;
  subgroup?: string;
}

const Main: React.FC = () => {
  // function isEmojiCategory(item: interfaceEmojis, filter: string) {
  //   return item.group === filter ? item : null;
  // }

  const emojiFilterSmileys = filterEmojisByGroup(emojiJson, 'Smileys & Emotion');

  // const emojiFilterAnimals = emojiJson.filter(event =>
  //   isEmojiCategory(event, 'Animals & Nature'),
  // );

  // console.log(emojiFilterSmileys);

  // function copyEmojiToClipboard(emojy: string) {
  //   return navigator.clipboard.writeText(emojy);
  // }

  return (
    <Container>
      <Welcome>
        <Wrapper>
          <h1>
            Econtre e copie seus emojis favoritos de forma simples e rápida!
          </h1>
          <form className="search-emoji">
            <div className="form-group">
              <img src={iconSearch} alt="search" />
              <input type="text" placeholder="Pesquise um emoji" />
            </div>
          </form>
        </Wrapper>
      </Welcome>
      <EmojiGroup emojis={emojiFilterSmileys} title="Smileys & Emotion"/>
    </Container>
  );
};

export default Main;
