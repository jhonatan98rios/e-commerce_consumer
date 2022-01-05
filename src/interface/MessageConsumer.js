
class MessageConsumer {
  constructor({ broker }) {
    this.consumer = broker.consumer({ groupId: 'test-group' })
  }

  async subscribe() {
    await this.consumer.connect()
    await this.consumer.subscribe({ topic: 'topic-test', fromBeginning: true })

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: `${message.value.toString()} | ${topic.toString()} | ${partition.toString()}`,
        })
      },
    })
  }
}

module.exports = MessageConsumer
