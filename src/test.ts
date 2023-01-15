import assert from "assert"

import { compress, decompress } from "."
import { sampleOne as input } from "./samples"

const compressed = compress(input)

const decompressed = decompress(compressed)

assert(decompressed === input)

console.log(compressed.byteLength, input.length)

if (compressed.byteLength < input.length) console.log('🎉')
else console.log('💩')