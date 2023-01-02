export type LZ77Options = {
  searchBufferLength: number
  lookaheadBufferLength: number
}

export type OutputEntry = [number, number, string]

export type Entry = [number, number, string, string]

export type EncodedArray = OutputEntry[]