FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./public ./public
COPY .. 
RUN yarn install
EXPOSE 3000

CMD ["yarn","dev"]