export class BinaryReader {
  protected pos: number
  protected bitCount: number

  view: DataView

  constructor(arrayBuffer: ArrayBuffer) {
    this.view = new DataView(arrayBuffer)
    this.pos = 0
    this.bitCount = 0
  }

  protected getData(type = 'Uint8') {
    if (this.view.byteLength > this.pos) {

      // @ts-ignore
      return this.view[`get${type}`](this.pos++)
    }

    throw new RangeError()
  }

  get buffer () {
    return this.view.buffer
  }

  getBytePosition() {
    return this.pos
  }

  seek(pos: number) {
    const oldPos = this.pos

    this.pos = pos

    return oldPos
  }

  peak(index = this.pos + 1) {
    if (this.view.byteLength > index && index > -1) {
      return this.view.getUint8(index)
    }

    return null
  }

  getUint16() {
    return (this.getData() << 8) | this.getData()
  }

  getUint8() {
    return this.getData()
  }

  getOffsetLength() {
    const data = this.getUint16()

    return [data >>> 4, data & 0xf]
  }

  getCharacter() {
    const uint8 = this.getData()

    return uint8 ? String.fromCharCode(uint8) : ''
  }
}