FROM node:12

# install packages
ADD . /opt
WORKDIR /opt
RUN npm install
RUN npm run build

# start the bot
ENTRYPOINT ["/opt/run.sh"]
