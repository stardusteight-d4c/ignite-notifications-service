import { Kafka } from 'kafkajs'
import { randomUUID } from 'node:crypto'

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['coherent-dove-13461-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'Y29oZXJlbnQtZG92ZS0xMzQ2MSTRpgaBzyPjEMH7LrKiXQ90WhvQ023WiFBWgek',
      password:
        'X80xcOXPoA-qThpbYf98LSgCY9BiwxuPJTNEwrbKHNTA6-RbNyUTloF8ylJOZUxavEBqZQ==',
    },
    ssl: true,
  })

  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade!',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  })

  await producer.disconnect()
}

bootstrap()
