
#!/usr/bin/env bash

PWD=`pwd`
WD=`cd $(dirname "$0") && pwd -P`

cd "${WD}"
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="../cosmos/cosmos-sdk"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/proto"
THIRD_PARTY_PROTO_DIR="$ROOT_PROTO_DIR/third_party/proto"
PROTO_ROOT_DIR="../proto"
NFT_PROTO_DIR="../proto/backport"
ISCN_PROTO_DIR="../proto/likechain"
OUT_DIR="../src/"

echo $COSMOS_PROTO_DIR
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --proto_path="$PROTO_ROOT_DIR" \
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
  "$NFT_PROTO_DIR/nft/v1beta1/event.proto" \
  "$NFT_PROTO_DIR/nft/v1beta1/genesis.proto" \
  "$NFT_PROTO_DIR/nft/v1beta1/nft.proto" \
  "$NFT_PROTO_DIR/nft/v1beta1/query.proto" \
  "$NFT_PROTO_DIR/nft/v1beta1/tx.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/blind_box_content.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/listing_expire_queue.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/class_data.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/nft_data.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/class_input.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/nft_input.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/class_reveal_queue.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/offer.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/classes_by_account.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/offer_expire_queue.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/classes_by_iscn.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/params.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/event.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/query.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/genesis.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/royalty_config.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/listing.proto" \
  "$ISCN_PROTO_DIR/likenft/v1/tx.proto"

rm -rf \
  "$OUT_DIR"/cosmos_proto/ \
  "$OUT_DIR"/gogoproto/ \
  "$OUT_DIR"/google/api/ \
  "$OUT_DIR"/google/protobuf/descriptor.ts

cd "${PWD}"
