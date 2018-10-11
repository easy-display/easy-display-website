FROM node:10.12.0-alpine

RUN apk update && \
    apk add ca-certificates wget curl && \
    update-ca-certificates && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
    apk add git && \
    apk add python && \
    rm -rf /var/cache/apk/*

RUN wget -O /usr/local/bin/confd https://github.com/kelseyhightower/confd/releases/download/v0.16.0/confd-0.16.0-linux-amd64

RUN chmod +x /usr/local/bin/confd

COPY . /code/

ADD ./docker/confd/ /confd/

COPY ./docker/docker-node-entrypoint /docker-node-entrypoint

WORKDIR /code/

RUN rm -rf /code/node_modules/

RUN npm -g install http-server

RUN npm install --production

RUN npm run build

ENTRYPOINT ["/bin/sh" , "-c" , "/docker-node-entrypoint" ]

CMD [ "node" ]
