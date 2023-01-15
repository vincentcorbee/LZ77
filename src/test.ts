// import assert from "assert"

// import { compress, decompress } from "."
// import { sampleFive as input } from "./samples"

// const compressed = compress(input, { searchBufferLength: 6, lookaheadBufferLength: 5 })

// const str = `💩abc`

// const array: number[] = []

// for (const char of str) {
//   for (let i = 0, length = char.length; i < length ; i ++) {
//     array.push(char.charCodeAt(i))
//   }
// }

// const uint16Array = new Uint16Array(array)

// // const dv = array.reduce((dataView, number, i) => {
// //   dataView.setUint16(i + 1, number)

// //   return dataView
// // }, new DataView(new ArrayBuffer(array.length * 2)))

// // console.log(dv.getUint16(1))

// console.log(uint16Array[4])

// const decompressed = decompress(compressed)

// assert(decompressed === input)

// console.log({decompressed, compressed})

import assert from "assert"

import { compress, decompress } from "."
import { sampleFour as input } from "./samples"

const compressed = compress(input)

const decompressed = decompress(compressed)

assert(decompressed === input)

console.log(compressed.byteLength, input.length)

if (compressed.byteLength < input.length) console.log('🎉')
else console.log('💩')