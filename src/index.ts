
import messageFactory from './factories/MessageFactory'
const messageService = messageFactory.generateInstance()

import OrderFactory from './factories/OrderFactory'
const orderService = OrderFactory.generateInstance()

messageService.subscribe(orderService)