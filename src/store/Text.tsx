interface interfaceText {
  [key: string] : {
    [key: string]: string;
  };
};

const Text: interfaceText = {
  EN: {
    presentation: 'Find and copy your favorite emojis simply and quickly!',
    inputPlaceholder: 'Search emojis',
    categoryPlaceholder: 'Category',
    buttonMoreEmoji: 'Expand',
  },
  PT: {
    presentation: 'Encontre e copie seus emojis favoritos de forma simples e rápida!',
    inputPlaceholder: 'Pesquisar emojis',
    categoryPlaceholder: 'Categoria',
    buttonMoreEmoji: 'Expandir'
  }
};

export default Text;