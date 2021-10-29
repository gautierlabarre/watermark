FROM node:16.10.0-alpine

WORKDIR /app

# USER node

COPY rollup.config.js ./
COPY package*.json ./

RUN npm install --no-audit

COPY . .

EXPOSE 8080
ENV HOST=0.0.0.0
CMD ["npm", "run", "serve"]