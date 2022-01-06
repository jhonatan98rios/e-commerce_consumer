import MessageConsumer from '../useCases/MessageConsumer'
import MessageService from '../services/MessageService'
import brokerConnection from '../adapter/kafka'


const generateInstance = () => {
    const messageConsumer = new MessageConsumer({ 
        broker: brokerConnection
    })

    return new MessageService({ 
        messageConsumer 
    })
}

export default { generateInstance }