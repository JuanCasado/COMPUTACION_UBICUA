FROM node:13.1.0-alpine

WORKDIR /
RUN mkdir /database_api
COPY . /database_api

WORKDIR /database_api
CMD ["./run.sh"]