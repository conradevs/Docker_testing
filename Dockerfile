FROM node:18
WORKDIR /home/app

COPY package.json .
RUN npm install

COPY . ./

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
