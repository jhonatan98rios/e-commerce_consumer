import { Consumer, Kafka } from 'kafkajs'
import { GROUP_ID, TOPIC_NAME, FROM_BEGINNIG } from '../constants'
import Order from '../entities/Order'
import OrderService from '../services/OrderService'

interface MessageConsumerInterface {
  broker: Kafka
}

class MessageConsumer {
  consumer: Consumer

  constructor({ broker }: MessageConsumerInterface) {
    this.consumer = broker.consumer({ groupId: GROUP_ID })
  }

  async subscribe(orderService: OrderService) {
    await this.consumer.connect()
    await this.consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: FROM_BEGINNIG })

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {

        if (message.value) {
          let data = JSON.parse(message.value.toString())

          orderService.create(
            new Order({ 
              id: data.id,
              content: data.content
            })
          )
        }
      }
    })
  }
}

export default MessageConsumer
