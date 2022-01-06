const PORT = 3000
const DEFAULT_HEADER = { 'Content-Type': 'application/json' }

const INITIAL_RETRY_TIME = 1000
const RETRIES = 10
const BROKERS = ['localhost:9092']
const CLIENT_ID = 'my-app'
const TOPIC_NAME = 'topic-test'
const GROUP_ID = 'test-group'
const FROM_BEGINNIG = true

export {
    PORT, DEFAULT_HEADER, INITIAL_RETRY_TIME, RETRIES, BROKERS, CLIENT_ID, TOPIC_NAME, GROUP_ID, FROM_BEGINNIG
}