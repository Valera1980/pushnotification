FROM node:13.0-alpine AS builder
COPY . ./immutTest
WORKDIR /immutTest
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /immutTest/dist/immutTest/ /usr/share/nginx/html
