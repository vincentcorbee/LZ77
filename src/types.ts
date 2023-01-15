export type LZ77Options = {
  searchBufferLength: number
  lookaheadBufferLength: number
}

export type Encoding = [number, number, string]

export type Match = Encoding

export type EncodedArray = Encoding[]