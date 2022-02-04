function copyEmojiToClipboard(emojy: string) {
  return navigator.clipboard.writeText(emojy);
}

export default copyEmojiToClipboard;