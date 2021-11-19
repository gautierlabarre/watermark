#!/bin/sh

# Use to exit immediately if a command fails.
set -e

# env # For debug :) UID and CYPRESS_INSTALL_BINARY env.

# check if vendor directory exists
if [ ! -d "node_modules" ]; then
    npm install --no-audit
fi


# eventually running the command passed in the docker-compose.yaml
exec "$@"