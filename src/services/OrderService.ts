import Order from '../entities/Order'
import OrderRepository from '../repositories/OrderRepository'

interface OrderServiceInterface {
    orderRepository: OrderRepository
}

class OrderService {
    orderRepository: OrderRepository

    constructor ({ orderRepository }: OrderServiceInterface) {
        this.orderRepository = orderRepository
    }

    async create(data: Order) {
        return this.orderRepository.create(data)
    }
}

module.exports = OrderService