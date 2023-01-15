import { getOptions, getMatch, getLookaheadBuffer, getSearchBuffer, createArrayBuffer } from "./lib";
import { LZ77Options, EncodedArray } from './types'

export function compress(
  input: string,
  options?: Partial<LZ77Options>
) {
  const { searchBufferLength, lookaheadBufferLength } = getOptions(options)

  const encodedArray: EncodedArray = []
  const end = input.length - 1

  let searchBuffer = ''

  let codingPosition = 0

  while (codingPosition <= end) {
    const lookaheadBuffer = getLookaheadBuffer(input, codingPosition, lookaheadBufferLength)
    const [offset, length, matchedChars] = getMatch(
      searchBuffer,
      lookaheadBuffer
    )

    codingPosition += length

    const nonMatchingChar = input[codingPosition] ?? ''

    searchBuffer += matchedChars + nonMatchingChar

    codingPosition++

    searchBuffer = getSearchBuffer(searchBuffer, searchBufferLength)

    encodedArray.push([offset, length, nonMatchingChar])
  }

  return createArrayBuffer(encodedArray)
}