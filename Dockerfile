FROM node:20-alpine

WORKDIR /opt/rust-tool
COPY package.json package-lock.json index.js ./
RUN npm install
ENTRYPOINT node index.js
