import Order from '../entities/Order'

interface OrderRepositoryInterface {
    connection: any
}

class OrderRepository {
    connection: any

    constructor ({ connection }: OrderRepositoryInterface) {
        this.connection = connection
    }

    async create(data: Order) {
        console.log(data)
    }
}

export default OrderRepository
