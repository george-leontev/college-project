FROM node:lts as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:latest

COPY --from=build /app/build/ /usr/share/nginx/html/

EXPOSE 80
