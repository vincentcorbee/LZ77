export function getLookaheadBuffer({
  input,
  lookaheadBufferLength,
  indexInput,
}: {
  input: string
  lookaheadBufferLength: number
  indexInput: number
}) {
  const firstChar = input[indexInput]

  if (firstChar === ' ') return firstChar

  const lookaheadBuffer = input.substring(indexInput, indexInput + lookaheadBufferLength)

  const firstWhiteSpace = lookaheadBuffer.indexOf(' ')

  if (firstWhiteSpace > -1) return lookaheadBuffer.substring(0, firstWhiteSpace)

  return lookaheadBuffer
}