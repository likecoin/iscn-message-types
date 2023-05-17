#!/usr/bin/env bash

PWD=`pwd`
WD=`cd $(dirname "$0") && pwd -P`

cd "${WD}"

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DEPS_DIR="../proto_deps"
PROTO_DEPS_DIR_FULL_PATH=$(realpath --no-symlink "$PROTO_DEPS_DIR")
if [ -e "$PROTO_DEPS_DIR_FULL_PATH" ]; then
  echo "Output path $PROTO_DEPS_DIR_FULL_PATH exists, please remove it first"
  exit 1
fi

COSMOS_SDK_PROTO_COMMIT="8cb30a2c4de74dc9bd8d260b1e75e176"

mkdir -p "$PROTO_DEPS_DIR_FULL_PATH"
echo "Output to $PROTO_DEPS_DIR_FULL_PATH"

BUF="$(npm bin)/buf"
$BUF export buf.build/cosmos/cosmos-sdk:$COSMOS_SDK_PROTO_COMMIT --output "$PROTO_DEPS_DIR_FULL_PATH"

cd "${PWD}"
