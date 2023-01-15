import { Match } from "../types"

export function getMatch(searchBuffer: string, lookaheadBuffer: string) {
  const [char] = lookaheadBuffer

  let offset = 0
  let lengthMatch = 0
  let matchedChars = searchBuffer.lastIndexOf(char) === -1 ? '' : char

  if (!matchedChars) return [offset, lengthMatch, matchedChars] as Match

  const searchBufferEnd = searchBuffer.length

  let indexLookaheadBuffer = lookaheadBuffer.length

  while (indexLookaheadBuffer > 0) {
    const chars = lookaheadBuffer.substring(0, indexLookaheadBuffer)

    const indexInSearchBuffer = searchBuffer.lastIndexOf(chars)

    if (indexInSearchBuffer > -1) {
      lengthMatch = chars.length

      matchedChars = chars

      offset = searchBufferEnd - indexInSearchBuffer

      /* Get the run length of the matched chars in the lookahead buffer */
      if (indexInSearchBuffer + chars.length === searchBufferEnd) {
        while (indexLookaheadBuffer <= lookaheadBuffer.length) {
          const remainingChars = lookaheadBuffer.substring(indexLookaheadBuffer)
          const match = remainingChars.indexOf(chars) === 0

          if (!match) break

          matchedChars += chars

          indexLookaheadBuffer += chars.length

          lengthMatch = matchedChars.length
        }
      }

      break
    }

    indexLookaheadBuffer--
  }

  return [offset, lengthMatch, matchedChars] as Match
}