import assert from "assert"

import { compress, decompress } from "."
import { sampleFour as input } from "./samples"

const compressed = compress(input)

const decompressed = decompress(compressed)

assert(decompressed === input)

console.log(compressed.byteLength, input.length)

if (compressed.byteLength < input.length) console.log('🎉')
else console.log('💩')