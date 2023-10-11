FROM node:20-alpine

COPY package.json package-lock.json index.js
RUN npm install
ENTRYPOINT node index.js
