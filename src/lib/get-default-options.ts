import { LZ77Options } from "../types";

export function getDefaultOptions(): LZ77Options {
  return { searchBufferLength: 256, lookaheadBufferLength: 16 }
}