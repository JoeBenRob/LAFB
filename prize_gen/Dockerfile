
FROM node:10

ARG VERSION=smallPrize

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN cp ./routes/${VERSION}.js ./routes/account.js

ENTRYPOINT [ "node", "server.js" ]
