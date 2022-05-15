
#!/usr/bin/env bash

PWD=`pwd`
WD=`cd $(dirname "$0") && pwd -P`

cd "${WD}"
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="../cosmos/cosmos-sdk"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/proto"
THIRD_PARTY_PROTO_DIR="$ROOT_PROTO_DIR/third_party/proto"
ISCN_PROTO_DIR="../proto"
OUT_DIR="../src/"

echo $COSMOS_PROTO_DIR
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --proto_path="$ISCN_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$ISCN_PROTO_DIR/iscn/genesis.proto" \
  "$ISCN_PROTO_DIR/iscn/iscnid.proto" \
  "$ISCN_PROTO_DIR/iscn/params.proto" \
  "$ISCN_PROTO_DIR/iscn/query.proto" \
  "$ISCN_PROTO_DIR/iscn/store.proto" \
  "$ISCN_PROTO_DIR/iscn/tx.proto" \
  "$ISCN_PROTO_DIR/iscn/genesis.proto" \
  "$ISCN_PROTO_DIR/iscn/iscnid.proto" \
  "$ISCN_PROTO_DIR/iscn/params.proto" \
  "$ISCN_PROTO_DIR/iscn/query.proto" \
  "$ISCN_PROTO_DIR/iscn/store.proto" \
  "$ISCN_PROTO_DIR/iscn/tx.proto" \
  "$ISCN_PROTO_DIR/nft/event.proto" \
  "$ISCN_PROTO_DIR/nft/genesis.proto" \
  "$ISCN_PROTO_DIR/nft/nft.proto" \
  "$ISCN_PROTO_DIR/nft/query.proto" \
  "$ISCN_PROTO_DIR/nft/tx.proto" \
  "$ISCN_PROTO_DIR/likenft/class_data.proto" \
  "$ISCN_PROTO_DIR/likenft/class_input.proto" \
  "$ISCN_PROTO_DIR/likenft/class_reveal_queue.proto" \
  "$ISCN_PROTO_DIR/likenft/classes_by_account.proto" \
  "$ISCN_PROTO_DIR/likenft/classes_by_iscn.proto" \
  "$ISCN_PROTO_DIR/likenft/event.proto" \
  "$ISCN_PROTO_DIR/likenft/genesis.proto" \
  "$ISCN_PROTO_DIR/likenft/mintable_nft.proto" \
  "$ISCN_PROTO_DIR/likenft/nft_data.proto" \
  "$ISCN_PROTO_DIR/likenft/nft_input.proto" \
  "$ISCN_PROTO_DIR/likenft/params.proto" \
  "$ISCN_PROTO_DIR/likenft/query.proto" \
  "$ISCN_PROTO_DIR/likenft/tx.proto"

rm -rf \
  "$OUT_DIR"/cosmos_proto/ \
  "$OUT_DIR"/gogoproto/ \
  "$OUT_DIR"/google/api/ \
  "$OUT_DIR"/google/protobuf/descriptor.ts

cd "${PWD}"
