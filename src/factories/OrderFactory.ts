import OrderRepository from '../repositories/OrderRepository'
import OrderService from '../services/OrderService'


const generateInstance = () => {
    const orderRepository = new OrderRepository({
        connection: ''
    })

    const orderService = new OrderService({
        orderRepository
    })

    return orderService
}

export default { generateInstance } 