class MessageService {
    constructor ({ messageRepository }) {
        this.messageRepository = messageRepository
    }

    async create(data) {
        return this.messageRepository.create(data)
    }
}

module.exports = MessageService