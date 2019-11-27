#!/usr/bin/env bash

set -e

docker login registry.docker.easydisplay.info

readonly APP_VERSION=$(cat package.json | grep version | cut -f 4 -d '"');

readonly IMAGE_NAME="easydisplay/website:${APP_VERSION}";

docker build --tag ${IMAGE_NAME} -f ./Dockerfile .;

readonly REGISTRY="registry.docker.easydisplay.info";

readonly REMOTE_IMAGE_NAME="easydisplay/website:${APP_VERSION}";

echo "\n\n\n\n\t\t • tagging: ${IMAGE_NAME} as: ${REGISTRY}/${REMOTE_IMAGE_NAME} \n\n\n\n";

docker tag ${IMAGE_NAME} ${REGISTRY}/${REMOTE_IMAGE_NAME};

docker push ${REGISTRY}/${REMOTE_IMAGE_NAME};

