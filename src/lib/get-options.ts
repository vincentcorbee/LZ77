import { LZ77MaxSearchBufferLength, LZ77MaxLookaheadBufferLength } from "../constants";
import { LZ77Options } from "../types";

export function getOptions(options: Partial<LZ77Options> = {}): LZ77Options {
  const { searchBufferLength = 255, lookaheadBufferLength = 15 } = options

  return {
    searchBufferLength: Math.min(searchBufferLength, LZ77MaxSearchBufferLength),
    lookaheadBufferLength: Math.min(lookaheadBufferLength, LZ77MaxLookaheadBufferLength)
  }
}