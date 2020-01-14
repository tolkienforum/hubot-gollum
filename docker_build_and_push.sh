#!/bin/sh

npm run build
npm run lint

npm version patch

docker build -t tolkienforum/gollum .
#docker push tolkienforum/gollum
