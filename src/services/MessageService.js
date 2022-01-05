class MessageService {
    constructor ({ messageConsumer }) {
        this.messageConsumer = messageConsumer
    }

    async subscribe() {
        return this.messageConsumer.subscribe()
    }
}

module.exports = MessageService