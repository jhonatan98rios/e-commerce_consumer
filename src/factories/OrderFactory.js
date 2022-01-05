const OrderRepository = require('../repositories/OrderRepository')
const OrderService = require('../services/MessageService')



const generateInstance = () => {
    const orderRepository = new OrderRepository({
        connection: ''
    })

    const orderService = new OrderService({
        orderRepository
    })

    return orderService
}

module.exports = { generateInstance }