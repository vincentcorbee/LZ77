import { BinaryWriter } from "../modules";
import { EncodedArray } from "../types";

export function createArrayBuffer(encodedData: EncodedArray) {
  const binaryWriter = new BinaryWriter(encodedData.length * 3)

  encodedData.forEach(([ offset, length, character ]) => {
    binaryWriter.setUint16(offset << 4 | length)
    binaryWriter.setUint8(character.charCodeAt(0))
  })

  return binaryWriter.buffer
}