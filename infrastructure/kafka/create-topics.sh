#!/bin/sh
# Creates the topics the apps use and raises the partition count of existing topics that have fewer
# partitions than listed below. Kafka can't reduce partitions, so a topic with more is left as is.
# Stop at the first failed command, including one inside a pipe, so kafka-init exits non-zero when
# a topic can't be described, created or updated.
set -eu -o pipefail

unset JMX_PORT

kafka_topics() {
  /opt/kafka/bin/kafka-topics.sh --bootstrap-server "$KAFKA_BOOTSTRAP_SERVER" "$@"
}

until /opt/kafka/bin/kafka-broker-api-versions.sh --bootstrap-server "$KAFKA_BOOTSTRAP_SERVER" >/dev/null 2>&1; do
  sleep 2
done

# "<topic> <partition count>" for every existing topic. Described once up front because each
# kafka-topics.sh call starts a JVM.
existing_topics=$(kafka_topics --describe | awk '/^Topic:/ {
  for (i = 1; i < NF; i++) if ($i == "PartitionCount:") print $2, $(i + 1)
}')

ensure_topic() {
  local topic=$1
  local partitions=$2
  local current
  current=$(echo "$existing_topics" | awk -v topic="$topic" '$1 == topic { print $2 }')

  if [ -z "$current" ]; then
    kafka_topics --create --if-not-exists --topic "$topic" --partitions "$partitions" --replication-factor 1
  elif [ "$current" -lt "$partitions" ]; then
    echo "Increasing partitions of $topic from $current to $partitions"
    kafka_topics --alter --topic "$topic" --partitions "$partitions"
  elif [ "$current" -gt "$partitions" ]; then
    echo "Topic $topic has $current partitions, more than $partitions. Kafka can't reduce them, skipping."
  fi
}

# Main topics first: auto-creation is disabled, so producers wait for them to exist.
ensure_topic user-events 12
ensure_topic user-events-retry-1 1
ensure_topic user-events-retry-2 1
ensure_topic user-events-retry-3 1
ensure_topic user-events-retry-4 1
ensure_topic user-events-retry-5 1
ensure_topic user-events-dlq 1

ensure_topic user-state-updates 1
ensure_topic user-state-updates-retry-1 1
ensure_topic user-state-updates-retry-2 1
ensure_topic user-state-updates-retry-3 1
ensure_topic user-state-updates-retry-4 1
ensure_topic user-state-updates-retry-5 1
ensure_topic user-state-updates-dlq 1
