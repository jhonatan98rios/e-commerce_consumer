interface OrderInterface {
  data: string
}

class Order {
  id: number
  content: string

  constructor({ data }: OrderInterface) {
    this.id = Math.floor(Math.random() * 100) + Date.now()
    this.content = data
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