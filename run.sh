#!/bin/bash

set -e

source .env

echo "Connecting to: $ROCKETCHAT_URL"
echo "using user: $ROCKETCHAT_USER"

cd ./build

exec node ../node_modules/hubot/bin/hubot.js -a rocketchat "$@"
