export function parseToJsonKey (sentence: string) {
  if (!sentence) {
    return null;
  }
  sentence = sentence.replace(/ /g, '_');

  return sentence;
}
