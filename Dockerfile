FROM node:14 AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

FROM base AS development

RUN npm install
RUN npm install -g nodemon

CMD ["npm", "run", "start"]