#!/bin/sh

set -e

# npm install
# npm run build

source .env

echo "Connecting to: $ROCKETCHAT_URL"
echo "using user: $ROCKETCHAT_USER"

cd ./build

export PATH="../node_modules/.bin:$PATH"
echo "Path: $PATH"

exec ../node_modules/.bin/hubot -a rocketchat "$@"
