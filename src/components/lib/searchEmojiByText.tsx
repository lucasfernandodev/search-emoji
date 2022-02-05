interface interfaceEmojis {
  codes: string;
  char: any;
  name: string;
  category: string;
  group: string;
  subgroup: string;
}

function searchEmojiByText(array : Array<interfaceEmojis>, text: string){
  const result = array.filter(value => {
    if(value.category.includes(text)) return value;
    if(value.group.includes(text)) return value;
    if(value.name.includes(text)) return value;
    if(value.subgroup.includes(text)) return value;
  });

  return result;
}

export default searchEmojiByText;