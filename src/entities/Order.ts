interface OrderInterface {
  id: number
  content: string
}

class Order {
  id: number
  content: string

  constructor({ id, content }: OrderInterface) {
    this.id = id
    this.content = content
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this)
    const amountInvalid = propertyNames
    .map((property) => (!!this[property as keyof Order]) ? null : `${property} is missing`)
    .filter(item => !!item)

    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid
    }
  }
}
export default Order