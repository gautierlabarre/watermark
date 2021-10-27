FROM node:16.10.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

CMD [ "npm", "start" ]
