#Dockerfile for workflow builder api
FROM node:12.16.2-stretch-slim

COPY / /express-cfe-api

RUN yarn install

WORKDIR /express-cfe-api

Expose 7006

CMD [ "yarn", "run", "start:dev"]