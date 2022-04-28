#!/bin/sh

# Await the exit of a function quietly.
function await {
	while kill -0 $1 &> /dev/null ; do
					sleep 0.5
	done
}

yarn &
await $!

./ops/prepare-env.sh &
await $!

# Build and wait for completion.
export NODE_ENV="development"
yarn &
await $!

export NODE_ENV="production"
yarn build &
await $!

# yarn &
# await $!

# yarn upgrade @rap/graphql &
# await $!

# yarn upgrade @rap/graphql/cms &
# await $!

export ENV_PATH=`pwd`
yarn web start-production
