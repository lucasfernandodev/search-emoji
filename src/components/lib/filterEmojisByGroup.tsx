interface interfaceEmojis {
  codes: string;
  char: any;
  name: string;
  category: string;
  group: string;
  subgroup: string;
}

const filterEmojisByGroup = (array :  Array<interfaceEmojis>, group : string) => {
  
  function filterArray(emoji : interfaceEmojis, filter : string){
    return emoji.group === filter && emoji;
  }

  return array.filter(emoji => filterArray(emoji, group));
}

export default filterEmojisByGroup;