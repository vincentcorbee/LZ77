export function getLookaheadBuffer(
  input: string,
  codingPosition: number,
  lookaheadBufferLength: number,
) {
  /*
    Return the lookahead buffer plus the current character
  */

  return input.substring(codingPosition, codingPosition + lookaheadBufferLength)
}