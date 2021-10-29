FROM node:16.10.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g nodemon --no-audit
RUN npm install --no-audit

COPY . .

CMD [ "npm", "start" ]
