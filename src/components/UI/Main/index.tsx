import React, { useEffect, useRef, useState } from 'react';

import { Container, Welcome, Wrapper } from './styles';
import iconSearch from '/public/imagens/search.svg';

import emojiJson from '../../../store/emoji.json';
import EmojiGroup from '../EmojiGroup';

import filterEmojisByGroup from '../../lib/filterEmojisByGroup';
import searchEmojiByText from '../../lib/searchEmojiByText';

interface interfaceEmojis {
  codes: string;
  char: any;
  name: string;
  category: string;
  group: string;
  subgroup: string;
}

const Main: React.FC = () => {
  const [pageCurrent, setPageCurrent] = useState<number>(0);
  const [searchShow, setSearchShow] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState(
    [] as Array<interfaceEmojis>,
  );
  const [selectedValue, setSelectedValue] = useState<string>('All');
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
  const SelectRef = useRef<HTMLSelectElement>(null);
  const categoryValue = useRef<HTMLSpanElement>(null);

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


  useEffect(() => {
    handlerSearch(searchText, selectedValue)
  }, [searchText, selectedValue])


  function handlerSearch(inputText: string, inputSelect: string) {
    
    console.log(inputText,inputSelect )
    if (inputText.length > 2) {

      if(inputSelect.toLowerCase() != 'all'){
        setSearchShow(true);
        const groupEmoji = filterEmojisByGroup(emojiJson, inputSelect);
        setSearchText(inputText);
        const filtered = searchEmojiByText(groupEmoji, inputText);
        setSearchResult(filtered);

      }else{

        setSearchShow(true);
        setSearchText(inputText);
  
        const filtered = searchEmojiByText(emojiJson, inputText);
        setSearchResult(filtered);
      }
      

    } else {
      setSearchShow(false);
    }
  }
 

  return (
    <Container>
      <Welcome>
        <Wrapper>
          <h1>
            Econtre e copie seus emojis favoritos de forma simples e rápida!
          </h1>
          <form
            className="search-emoji"
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <div className="form-group">
              <img src={iconSearch} alt="search" />
              <input
                type="text"
                placeholder="Pesquise um emoji"
                onChange={event => setSearchText(event.target.value)}
              />

              <div className="category">
                <div className="placholder">
                  <label htmlFor="category">Categoria:</label>
                  <span ref={categoryValue}>{selectedValue}</span>
                </div>

                <select
                  name="category"
                  id="category"
                  ref={SelectRef}
                  onChange={event => setSelectedValue(event.target.value)}
                >
                  <option value="all" defaultValue="All">
                    All
                  </option>
                  {emojisList.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </form>
        </Wrapper>
      </Welcome>

      {searchShow === false ? (
        emojisList.map((item, index) => {
          if (index <= pageCurrent) {
            const emojis = filterEmojisByGroup(emojiJson, item);
            return (
              <EmojiGroup
                index={index === 0 && true}
                key={index}
                emojis={emojis}
                title={item}
              />
            );
          }
        })
      ) : (
        <EmojiGroup
          index={true}
          emojis={searchResult}
          title={searchText}
          expandShow={false}
          all={true}
        />
      )}

      <section ref={lastRef} />
    </Container>
  );
};

export default Main;
