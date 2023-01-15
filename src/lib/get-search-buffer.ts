export function getSearchBuffer (searchBuffer: string, searchBufferLength: number) {
  const currentLengthSearchBuffer = searchBuffer.length

    /*
      Move the search buffer n positions over based on the difference
      between the current lenght of the search buffer and the max length of our search buffer
    */

    if (currentLengthSearchBuffer >= searchBufferLength) return searchBuffer.substring(currentLengthSearchBuffer - searchBufferLength)

    return searchBuffer
}