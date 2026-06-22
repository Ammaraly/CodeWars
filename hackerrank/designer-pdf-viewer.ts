/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */
function getHeightIndex(character: string): number {
  if (character.length > 1)
    throw Error(`Invalid character value: ${character}`);
  return character.charCodeAt(0) - 97;
}

function getHeight(character: string, h: number[]) {
  return h[getHeightIndex(character)];
}

function designerPdfViewer(h: number[], word: string): number {
  // Write your code here
  return (
    getHeight(
      Array.from(word).reduce((prev, curr) => {
        const prevHeight = getHeight(prev, h);
        const currHeight = getHeight(curr, h);
        if (prevHeight > currHeight) return prev;
        return curr;
      }, word[0]),
      h,
    ) * word.length
  );
}

console.log(designerPdfViewer([0, 1, 2, 3, 4], "abc"));
