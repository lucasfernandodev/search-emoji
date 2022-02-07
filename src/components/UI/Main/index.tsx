import React, { useEffect, useRef, useState } from 'react';

import { Container, Welcome, Wrapper } from './styles';
import iconSearch from '/public/imagens/search.svg';

import emojiJson from '../../../store/emoji.json';
import emojiPT from '../../../store/emoji-pt.json';

import EmojiGroup from '../EmojiGroup';
import Text from '../../../store/Text';
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

interface EmojisGroups {
  [key: string]: Array<string>;
}

interface interfaceMain {
  lang: string;
}

const Main: React.FC<interfaceMain> = ({ lang }) => {
  const [emojiObject, setEmojiObject] = useState([] as Array<interfaceEmojis>);
  const [pageCurrent, setPageCurrent] = useState<number>(0);
  const [searchShow, setSearchShow] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState(
    [] as Array<interfaceEmojis>,
  );
  const [selectedValue, setSelectedValue] = useState<string>('Todos');

  const emojiGroups: EmojisGroups = {
    EN: [
      'Smileys & Emotion',
      'Animals & Nature',
      'People & Body',
      'Food & Drink',
      'Travel & Places',
      'Symbols',
      'Flags',
    ],
    PT: [
      'Sorrisos e Emoções',
      'Animais e Natureza',
      'Pessoas & corpo',
      'Comida e bebida',
      'Viagens e lugares',
      'Símbolos',
      'Bandeira',
    ],
  };

  const lastRef = useRef<HTMLDivElement>(null);
  const SelectRef = useRef<HTMLSelectElement>(null);
  const categoryValue = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log('log useEffect, pageCurrent: ', pageCurrent);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (pageCurrent <= emojiGroups[lang].length) {
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
    handlerSearch(searchText, selectedValue);
  }, [searchText, selectedValue]);

  useEffect(() => {
    setSelectedValue(lang === 'PT' ? 'Todos' : 'All');
    if (lang === 'PT') return setEmojiObject(emojiPT);
    if (lang === 'EN') return setEmojiObject(emojiJson);
  }, [lang]);

  function handlerSearch(inputText: string, inputSelect: string) {
    let filter = lang === 'PT' ? 'todos' : 'all';

    if (inputText.length > 2) {
      if (inputSelect.toLowerCase() !== filter.toLowerCase()) {
        setSearchShow(true);
        const groupEmoji = filterEmojisByGroup(emojiObject, inputSelect);
        setSearchText(inputText);
        const filtered = searchEmojiByText(groupEmoji, inputText);
        setSearchResult(filtered);
      } else {
        setSearchShow(true);
        setSearchText(inputText);

        const filtered = searchEmojiByText(emojiObject, inputText);
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
          <h1>{Text[lang].presentation}</h1>
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
                placeholder={Text[lang].inputPlaceholder}
                onChange={event => setSearchText(event.target.value)}
              />

              <div className="category">
                <div className="placholder">
                  <label htmlFor="category">
                    {Text[lang].categoryPlaceholder}:
                  </label>
                  <span ref={categoryValue}>{selectedValue}</span>
                </div>

                <select
                  name="category"
                  id="category"
                  ref={SelectRef}
                  onChange={event => setSelectedValue(event.target.value)}
                >
                  <option value="all" defaultValue="all">
                    {lang === 'PT' ? 'Todos' : 'All'}
                  </option>
                  {
                  emojiGroups[lang].map((item, index) => {return <option key={index} value={item}>{item}</option>})
                  }
                </select>
              </div>
            </div>
          </form>
        </Wrapper>
      </Welcome>

      {searchShow === false ? (
        emojiGroups[lang].map((item, index) => {
          if (index <= pageCurrent) {
            const emojis = filterEmojisByGroup(emojiObject, item);
            return (
              <EmojiGroup
                index={index === 0 && true}
                key={index}
                emojis={emojis}
                title={item}
                lang={lang}
              />
            );
          }
        })
      ) : (
        <EmojiGroup
          index={true}
          emojis={searchResult}
          title={ lang === 'PT' ? `O resultado da busca por "${searchText}" é` : `Search results for "${searchText}"`}
          expandShow={false}
          all={true}
          lang={lang}
        />
      )}

      <section ref={lastRef} />
    </Container>
  );
};

export default Main;
