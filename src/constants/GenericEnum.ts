export class GenericEnum {
  public text: String
  public value: String

  toArray(): GenericEnum[] {
    const array = []
    for (let key in this) {
      if (this.hasOwnProperty(key))
        array.push({
          text: this[key],
          value: key,
        })
    }
    return array
  }
}
