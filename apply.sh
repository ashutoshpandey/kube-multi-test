#!/bin/bash

directory="k8s"

files=(
    "namespace.yml"
    "db.yml"
    "db-secret.yml"
    "db-configmap.yml"
    "server.yml"
    "client.yml"
)

for file in ${files[@]}; do
    kubectl apply -f "$directory/$file"
done