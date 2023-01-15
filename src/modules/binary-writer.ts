import { BinaryReader } from './binary-reader'

export class BinaryWriter extends BinaryReader {
  constructor(length: number) {
    super(new ArrayBuffer(length))
  }

  private setData(data: number, type = 'Uint8') {
    let advance = 0

    switch(type) {
      case 'Uint16':
        advance = 2
        break;
      default:
        advance = 1
    }

    if (this.view.byteLength > this.pos) {
      // @ts-ignore
      this.view[`set${type}`](this.pos, data)

      this.pos += advance

      return this
    }

    return this
  }

  setUint16(data: number) {
    return this.setData(data, 'Uint16')
  }

  setUint8(data: number) {
    return this.setData(data)
  }
}