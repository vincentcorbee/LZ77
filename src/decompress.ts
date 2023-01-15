import { BinaryReader } from "./modules"

export function decompress(buffer: ArrayBuffer) {
  const binaryReader = new BinaryReader(buffer)

  let output = ''

  let index = 0

  while (binaryReader.peak() !== null) {
    const [offset, length] = binaryReader.getOffsetLength()
    const char = binaryReader.getCharacter()

    if (offset === 0 && length === 0) output += char
    else {
      const startIndex = output.length - offset

      const overflow = Math.max(startIndex + length - output.length, 0)

      const chars = output.substring(startIndex, startIndex + length)

      if (overflow) {
        let runLength = length / (length - overflow)

        while (runLength > 0) {
          output += chars

          runLength--
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