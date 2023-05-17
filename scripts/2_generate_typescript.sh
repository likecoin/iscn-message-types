
#!/usr/bin/env bash

PWD=`pwd`
WD=`cd $(dirname "$0") && pwd -P`

cd "${WD}"
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DEPS_DIR="../proto_deps"
PROTO_ROOT_DIR="../proto"
OUT_DIR="../src/"

mkdir -p "$OUT_DIR"

PROTO_FILES=$(find "$PROTO_ROOT_DIR" -name '*.proto' -type f)
protoc \
  --plugin="$(npm bin)/protoc-gen-ts_proto" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$PROTO_DEPS_DIR" \
  --proto_path="$PROTO_ROOT_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  $PROTO_FILES

rm -rf \
  "$OUT_DIR"/cosmos_proto/ \
  "$OUT_DIR"/gogoproto/ \
  "$OUT_DIR"/google/api/ \
  "$OUT_DIR"/google/protobuf/descriptor.ts

cd "${PWD}"
