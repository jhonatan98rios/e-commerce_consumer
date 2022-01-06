import MessageConsumer from "../useCases/MessageConsumer"

interface MessageServiceInterface {
    messageConsumer: MessageConsumer
}

class MessageService {
    messageConsumer: MessageConsumer

    constructor ({ messageConsumer }: MessageServiceInterface) {
        this.messageConsumer = messageConsumer
    }

    async subscribe() {
        return this.messageConsumer.subscribe()
    }
}

export default MessageService



