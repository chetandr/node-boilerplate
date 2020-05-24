#Dockerfile for workflow builder api
FROM node:12.16.2-stretch-slim
 
COPY /dist /app/dist
COPY /env /app/env
COPY /package.json /app/package.json
 
WORKDIR /app
 
RUN npm i --only=prod
 
CMD [ "npm", "start" ]