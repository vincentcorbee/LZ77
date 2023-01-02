import { compress, decompress } from "."
import { sampleFour as input } from "./samples"

const compressed = compress(input)

const decompressed = decompress(compressed)

console.log({ compressed, decompressed })

console.log(decompressed === input)