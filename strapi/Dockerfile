FROM strapi/base

WORKDIR /srv/app

COPY ./package.json ./

RUN npm install -g strapi
RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]