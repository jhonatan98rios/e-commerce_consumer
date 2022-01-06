import Message from './entities/Message'
import Order from './entities/Order'

import messageFactory from './factories/MessageFactory'
const messageService = messageFactory.generateInstance()

messageService.subscribe()