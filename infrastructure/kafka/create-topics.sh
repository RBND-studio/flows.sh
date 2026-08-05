#!/bin/sh

unset JMX_PORT;

until /opt/kafka/bin/kafka-broker-api-versions.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER >/dev/null 2>&1; do
  sleep 2;
done;

/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events --partitions 12 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events-retry-1 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events-retry-2 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events-retry-3 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events-retry-4 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events-retry-5 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-events-dlq --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates-retry-1 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates-retry-2 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates-retry-3 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates-retry-4 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates-retry-5 --partitions 1 --replication-factor 1;
/opt/kafka/bin/kafka-topics.sh --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --create --if-not-exists --topic user-state-updates-dlq --partitions 1 --replication-factor 1;