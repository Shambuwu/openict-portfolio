FROM node:latest

WORKDIR /app


RUN apt-get update && \
    apt-get -y install sudo

ENV PATH /app/node_modules.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g react-scripts

COPY . ./

CMD ["npm", "start"]
