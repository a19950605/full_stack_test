FROM node:14
WORKDIR /nodejs_test-main
COPY package.json .
RUN npm install
COPY . .
CMD npm start