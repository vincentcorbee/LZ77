import { EncodedArray } from "./types"

export function decompress(input: EncodedArray) {
  const { length } = input

  let output = ''

  let index = 0

  while (index < length) {
    const [offset, length, char] = input[index]

    if (offset === 0 && length === 0) output += char
    else {
      const startIndex = output.length - offset

      const overflow = Math.max(startIndex + length - output.length, 0)

      const chars = output.substring(startIndex, startIndex + length)

      if (overflow) {
        let runtimeLength = length / (length - overflow)

        while (runtimeLength > 0) {
          output += chars

          runtimeLength--
        }
      } else {
        output += chars
      }

      output += char
    }

    index++
  }

  return output
}