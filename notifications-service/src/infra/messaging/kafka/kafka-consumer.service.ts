import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['coherent-dove-13461-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y29oZXJlbnQtZG92ZS0xMzQ2MSTRpgaBzyPjEMH7LrKiXQ90WhvQ023WiFBWgek',
          password:
            'X80xcOXPoA-qThpbYf98LSgCY9BiwxuPJTNEwrbKHNTA6-RbNyUTloF8ylJOZUxavEBqZQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
