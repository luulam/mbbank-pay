FROM node:12.16.3

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD yarn server