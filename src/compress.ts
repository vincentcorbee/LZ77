import { getDefaultOptions, getEntry, getLookaheadBuffer } from "./lib";

export function compress(
  input: string,
  options?: { searchBufferLength?: number; lookaheadBufferLength?: number }
) {
  const { searchBufferLength = 256, lookaheadBufferLength = 16 } =
    options ?? getDefaultOptions()

  const output: [number, number, string][] = []
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