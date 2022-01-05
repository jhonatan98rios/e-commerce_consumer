const MessageConsumer = require('../interface/MessageConsumer')
const MessageService = require('../services/MessageService')
const brokerConnection = require('../broker/connection')


const generateInstance = () => {
    const messageConsumer = new MessageConsumer({
        broker: brokerConnection
    })

    const messageService = new MessageService({
        messageConsumer
    })

    return messageService
}

module.exports = { generateInstance }