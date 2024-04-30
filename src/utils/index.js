export function shortenString(sentence, n) {
  const shortenedText = sentence.substring(0, n) + "...";
  return shortenedText;
}
