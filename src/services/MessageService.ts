import MessageConsumer from "../useCases/MessageConsumer"
import OrderService from "./OrderService"

interface MessageServiceInterface {
    messageConsumer: MessageConsumer
}

class MessageService {
    messageConsumer: MessageConsumer

    constructor ({ messageConsumer }: MessageServiceInterface) {
        this.messageConsumer = messageConsumer
    }

    async subscribe(orderService: OrderService) {
        return this.messageConsumer.subscribe(orderService)
    }
}

export default MessageService



