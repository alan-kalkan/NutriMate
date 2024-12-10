FROM node:lts-buster-slim

WORKDIR /workdir

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    make \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm rebuild bcrypt --build-from-source

RUN npm install -g nodemon

EXPOSE 7777

CMD [ "npm", "start" ]