interface interfaceEmojiGroup {
  codes: string;
  char: any;
  name: string;
  category: string;
  group: string;
  subgroup?: string;
}

const filterEmojisByGroup = (array :  Array<interfaceEmojiGroup>, group : string) => {
  
  function filterArray(emoji : interfaceEmojiGroup, filter : string){
    return emoji.group === filter;
  }

  return array.filter(emoji => filterArray(emoji, group));
}

export default filterEmojisByGroup;