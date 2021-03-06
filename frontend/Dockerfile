# see https://dev.to/kumar_abhirup/next-js-docker-made-easy-2bok
FROM node:alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app


WORKDIR /usr/src/app
# Install PM2
RUN npm install --global pm2

# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files
COPY ./ ./



RUN npm run build

# Building app
EXPOSE 3000

# RUN AS USER NODE
USER node
# Running the app
CMD ["pm2-runtime", "npm", "--", "start"]