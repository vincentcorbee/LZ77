export function getLookaheadBuffer({
  input,
  lookaheadBufferLength,
  indexInput,
}: {
  input: string
  lookaheadBufferLength: number
  indexInput: number
}) {
  return input.substring(indexInput, indexInput + lookaheadBufferLength)
}