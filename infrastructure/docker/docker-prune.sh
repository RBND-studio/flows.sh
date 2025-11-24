#!/bin/bash

# Inspired by:
# https://rzymek.github.io/post/docker-prune

# This script prunes Docker system resources that are unused for more than 24 hours.
# Otherwise the system disk will fill up and cause issues.

# Put this script in /etc/cron.daily/ to run it daily.

log=/var/lib/docker/prune.log
date +'=== %Y.%m.%d %H:%M ===' >> $log

docker system prune -af --filter until=24h >> $log