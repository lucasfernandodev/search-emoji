import React, { useEffect, useRef, useState } from 'react';

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

  const [pageCurrent, setPageCurrent] = useState<number>(0);
  const [searchShow, setSearchShow] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState([] as Array<interfaceEmojis>);
  const emojisList = [
    'Smileys & Emotion',
    'Animals & Nature',
    'People & Body',
    'Food & Drink',
    'Travel & Places',
    'Symbols',
    'Flags',
  ];

  const lastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('log useEffect, pageCurrent: ', pageCurrent);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (pageCurrent <= emojisList.length) {
          setPageCurrent(pageCurrent + 1);
        }
      }
    });

    if (null !== lastRef.current) {
      observer.observe(lastRef.current);
      return () => observer.disconnect();
    }
  }, [pageCurrent]);

  function searchEmojiByText(text: string){
    const result = emojiJson.filter(value => {
      if(value.category.includes(text)) return value;
      if(value.group.includes(text)) return value;
      if(value.name.includes(text)) return value;
      if(value.subgroup.includes(text)) return value;
    });

    return result;
  }

  function handlerSearch(event: React.ChangeEvent<HTMLInputElement>){
    const inputText = event.target.value;
    
    if(inputText.length > 2){
      setSearchShow(true)
      setSearchText(inputText);

      const filtered = searchEmojiByText(inputText);
      setSearchResult(filtered)
      console.log("Filted", filtered);
    }

  }

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
              <input type="text" placeholder="Pesquise um emoji" onChange={event =>handlerSearch(event)}/>
            </div>
          </form>
        </Wrapper>
      </Welcome>

      {searchShow === false ? emojisList.map((item, index) => {
        if (index <= pageCurrent) {
          const emojis = filterEmojisByGroup(emojiJson, item);
          return <EmojiGroup index={index === 0 && true} key={index} emojis={emojis} title={item} />;
        }
      }) : (
        <EmojiGroup index={true} emojis={searchResult} title={searchText} />
      )}

      <section ref={lastRef} />
    </Container>
  );
};

export default Main;
