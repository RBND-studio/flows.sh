import { KafkaJS } from "@confluentinc/kafka-javascript";
import { EachMessageHandler } from "@confluentinc/kafka-javascript/types/kafkajs";
import { Injectable } from "@nestjs/common";

@Injectable()
export class KafkaService {
  producer: KafkaJS.Producer;

  constructor() {
    this.producer = new KafkaJS.Kafka({}).producer({
      "bootstrap.servers": process.env.BACKEND_KAFKA_BROKER,
    });
    void this.producer.connect();
  }

  async consume(topics: string[], callback: EachMessageHandler): Promise<void> {
    const consumer = new KafkaJS.Kafka({}).consumer({
      "bootstrap.servers": process.env.BACKEND_KAFKA_BROKER,
      "group.id": "backend",
      "allow.auto.create.topics": true,
    });

    await consumer.connect();
    await consumer.subscribe({ topics });

    await consumer.run({
      eachMessage: callback,
    });
  }
}
