#!/usr/bin/env bash




readonly NETWORK_NAME="easydisplay";
docker network inspect ${NETWORK_NAME} > /dev/null || echo "docker network: ${NETWORK_NAME} does not exist, creating... \ndocker network create -d bridge custom"
docker network inspect ${NETWORK_NAME} > /dev/null || docker network create -d bridge ${NETWORK_NAME};

readonly IMAGE_NAME="easydisplay/website";

readonly REGISTRY="registry.docker.easydisplay.info";

readonly CONTAINER_NAME="easydisplay-website";

export NODE_PORT="9001";

docker run                                      \
    --rm                                        \
    --interactive                               \
    --tty                                       \
    --env-file ./docker/env                     \
    --name ${CONTAINER_NAME}                    \
    --network ${NETWORK_NAME}                   \
    --publish ${NODE_PORT}:${NODE_PORT}         \
    ${IMAGE_NAME}


#    --volume ${PWD}/public/:/public/:cached     \
#    --volume ${PWD}/docker/confd/:/confd:cached \
