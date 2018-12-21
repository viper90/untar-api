FROM node:8-alpine

ENV NODE_ENV=production

ENV GIT_URL https://github.com/viper90/untar-api

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . .

CMD ["npm", "start"]