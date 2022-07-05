/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "likechain.likenft.v1";

/** Params defines the parameters for the module. */
export interface Params {
  priceDenom: string;
  feePerByte?: DecCoin;
  maxOfferDurationDays: Long;
  maxListingDurationDays: Long;
  maxRoyaltyBasisPoints: Long;
}

const baseParams: object = {
  priceDenom: "",
  maxOfferDurationDays: Long.UZERO,
  maxListingDurationDays: Long.UZERO,
  maxRoyaltyBasisPoints: Long.UZERO,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxOfferDurationDays.isZero()) {
      writer.uint32(24).uint64(message.maxOfferDurationDays);
    }
    if (!message.maxListingDurationDays.isZero()) {
      writer.uint32(32).uint64(message.maxListingDurationDays);
    }
    if (!message.maxRoyaltyBasisPoints.isZero()) {
      writer.uint32(40).uint64(message.maxRoyaltyBasisPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.feePerByte = DecCoin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxOfferDurationDays = reader.uint64() as Long;
          break;
        case 4:
          message.maxListingDurationDays = reader.uint64() as Long;
          break;
        case 5:
          message.maxRoyaltyBasisPoints = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = String(object.priceDenom);
    } else {
      message.priceDenom = "";
    }
    if (object.feePerByte !== undefined && object.feePerByte !== null) {
      message.feePerByte = DecCoin.fromJSON(object.feePerByte);
    } else {
      message.feePerByte = undefined;
    }
    if (
      object.maxOfferDurationDays !== undefined &&
      object.maxOfferDurationDays !== null
    ) {
      message.maxOfferDurationDays = Long.fromString(
        object.maxOfferDurationDays
      );
    } else {
      message.maxOfferDurationDays = Long.UZERO;
    }
    if (
      object.maxListingDurationDays !== undefined &&
      object.maxListingDurationDays !== null
    ) {
      message.maxListingDurationDays = Long.fromString(
        object.maxListingDurationDays
      );
    } else {
      message.maxListingDurationDays = Long.UZERO;
    }
    if (
      object.maxRoyaltyBasisPoints !== undefined &&
      object.maxRoyaltyBasisPoints !== null
    ) {
      message.maxRoyaltyBasisPoints = Long.fromString(
        object.maxRoyaltyBasisPoints
      );
    } else {
      message.maxRoyaltyBasisPoints = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.feePerByte !== undefined &&
      (obj.feePerByte = message.feePerByte
        ? DecCoin.toJSON(message.feePerByte)
        : undefined);
    message.maxOfferDurationDays !== undefined &&
      (obj.maxOfferDurationDays = (
        message.maxOfferDurationDays || Long.UZERO
      ).toString());
    message.maxListingDurationDays !== undefined &&
      (obj.maxListingDurationDays = (
        message.maxListingDurationDays || Long.UZERO
      ).toString());
    message.maxRoyaltyBasisPoints !== undefined &&
      (obj.maxRoyaltyBasisPoints = (
        message.maxRoyaltyBasisPoints || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    } else {
      message.priceDenom = "";
    }
    if (object.feePerByte !== undefined && object.feePerByte !== null) {
      message.feePerByte = DecCoin.fromPartial(object.feePerByte);
    } else {
      message.feePerByte = undefined;
    }
    if (
      object.maxOfferDurationDays !== undefined &&
      object.maxOfferDurationDays !== null
    ) {
      message.maxOfferDurationDays = object.maxOfferDurationDays as Long;
    } else {
      message.maxOfferDurationDays = Long.UZERO;
    }
    if (
      object.maxListingDurationDays !== undefined &&
      object.maxListingDurationDays !== null
    ) {
      message.maxListingDurationDays = object.maxListingDurationDays as Long;
    } else {
      message.maxListingDurationDays = Long.UZERO;
    }
    if (
      object.maxRoyaltyBasisPoints !== undefined &&
      object.maxRoyaltyBasisPoints !== null
    ) {
      message.maxRoyaltyBasisPoints = object.maxRoyaltyBasisPoints as Long;
    } else {
      message.maxRoyaltyBasisPoints = Long.UZERO;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
