
FROM node:latest
WORKDIR /app/server
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]