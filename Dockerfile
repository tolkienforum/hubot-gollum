FROM node:10

# install packages
ADD . /opt
WORKDIR /opt
RUN npm install
RUN npm run build

# start the bot
CMD ["/opt/run.sh"]
