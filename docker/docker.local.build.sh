#!/usr/bin/env bash


readonly IMAGE_NAME="easydisplay/website";

docker build --tag ${IMAGE_NAME} -f ./Dockerfile .;
