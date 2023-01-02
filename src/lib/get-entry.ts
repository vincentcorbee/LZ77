import { Entry } from "../types"

export function getEntry(searchBuffer: string, lookaheadBuffer: string) {
  const char = lookaheadBuffer[0]

  if (searchBuffer.indexOf(char) === -1)
    return [0, 0, '', char] as Entry

  const searchBufferEnd = searchBuffer.length

  let indexLookaheadBuffer = lookaheadBuffer.length

  let offset = 0
  let lengthMatch = 0
  let matchedChars = ''

  while (indexLookaheadBuffer > -1) {
    const chars = lookaheadBuffer.substring(0, indexLookaheadBuffer)

    const indexInSearchBuffer = searchBuffer.lastIndexOf(chars)

    if (indexInSearchBuffer > -1) {
      lengthMatch = chars.length

      matchedChars = chars

      offset = searchBufferEnd - indexInSearchBuffer

      /* Get the run time length of the matched chars in the lookahead buffer */
      if (indexInSearchBuffer + chars.length === searchBufferEnd) {
        while (indexLookaheadBuffer <= lookaheadBuffer.length) {
          const remainingChars = lookaheadBuffer.substring(indexLookaheadBuffer)
          const match = remainingChars.match(new RegExp(`^(?:${chars})`))

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

  return [offset, lengthMatch, matchedChars, ''] as Entry
}