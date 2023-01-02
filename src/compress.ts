import { getDefaultOptions, getEntry, getLookaheadBuffer } from "./lib";
import { LZ77Options, EncodedArray } from './types'

export function compress(
  input: string,
  options?: LZ77Options
) {
  const { searchBufferLength = 256, lookaheadBufferLength = 16 } =
    options ?? getDefaultOptions()

  const output: EncodedArray = []
  const end = input.length - 1

  let searchBuffer = ''

  let indexInput = 0

  while (indexInput <= end) {
    const lookaheadBuffer = getLookaheadBuffer({
      input,
      indexInput,
      lookaheadBufferLength,
    })
    const [offset, length, matchedChars, deviation] = getEntry(
      searchBuffer,
      lookaheadBuffer
    )

    indexInput += length

    const char = deviation || (input[indexInput] ?? '')

    searchBuffer += matchedChars + char

    indexInput++

    output.push([offset, length, char])

    if (searchBuffer.length >= searchBufferLength) searchBuffer = ''
  }

  return output
}