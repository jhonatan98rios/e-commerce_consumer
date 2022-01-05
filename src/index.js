const Message = require('./entities/Message')
const Order = require('./entities/Order')

const messageFactory = require('./factories/MessageFactory')
const messageService = messageFactory.generateInstance()

messageService.subscribe()