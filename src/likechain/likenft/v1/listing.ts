/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "likechain.likenft.v1";

export interface Listing {
  classId: string;
  nftId: string;
  seller: string;
  price: Long;
  expiration?: Date;
  fullPayToRoyalty: boolean;
}

export interface ListingStoreRecord {
  classId: string;
  nftId: string;
  seller: Uint8Array;
  price: Long;
  expiration?: Date;
  fullPayToRoyalty: boolean;
}

const baseListing: object = {
  classId: "",
  nftId: "",
  seller: "",
  price: Long.UZERO,
  fullPayToRoyalty: false,
};

export const Listing = {
  encode(
    message: Listing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListing } as Listing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.seller = reader.string();
          break;
        case 4:
          message.price = reader.uint64() as Long;
          break;
        case 5:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.fullPayToRoyalty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Listing {
    const message = { ...baseListing } as Listing;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = String(object.nftId);
    } else {
      message.nftId = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration);
    } else {
      message.expiration = undefined;
    }
    if (
      object.fullPayToRoyalty !== undefined &&
      object.fullPayToRoyalty !== null
    ) {
      message.fullPayToRoyalty = Boolean(object.fullPayToRoyalty);
    } else {
      message.fullPayToRoyalty = false;
    }
    return message;
  },

  toJSON(message: Listing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    message.fullPayToRoyalty !== undefined &&
      (obj.fullPayToRoyalty = message.fullPayToRoyalty);
    return obj;
  },

  fromPartial(object: DeepPartial<Listing>): Listing {
    const message = { ...baseListing } as Listing;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = undefined;
    }
    if (
      object.fullPayToRoyalty !== undefined &&
      object.fullPayToRoyalty !== null
    ) {
      message.fullPayToRoyalty = object.fullPayToRoyalty;
    } else {
      message.fullPayToRoyalty = false;
    }
    return message;
  },
};

const baseListingStoreRecord: object = {
  classId: "",
  nftId: "",
  price: Long.UZERO,
  fullPayToRoyalty: false,
};

export const ListingStoreRecord = {
  encode(
    message: ListingStoreRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller.length !== 0) {
      writer.uint32(26).bytes(message.seller);
    }
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListingStoreRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListingStoreRecord } as ListingStoreRecord;
    message.seller = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.seller = reader.bytes();
          break;
        case 4:
          message.price = reader.uint64() as Long;
          break;
        case 5:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.fullPayToRoyalty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListingStoreRecord {
    const message = { ...baseListingStoreRecord } as ListingStoreRecord;
    message.seller = new Uint8Array();
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = String(object.nftId);
    } else {
      message.nftId = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = bytesFromBase64(object.seller);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration);
    } else {
      message.expiration = undefined;
    }
    if (
      object.fullPayToRoyalty !== undefined &&
      object.fullPayToRoyalty !== null
    ) {
      message.fullPayToRoyalty = Boolean(object.fullPayToRoyalty);
    } else {
      message.fullPayToRoyalty = false;
    }
    return message;
  },

  toJSON(message: ListingStoreRecord): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined &&
      (obj.seller = base64FromBytes(
        message.seller !== undefined ? message.seller : new Uint8Array()
      ));
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    message.fullPayToRoyalty !== undefined &&
      (obj.fullPayToRoyalty = message.fullPayToRoyalty);
    return obj;
  },

  fromPartial(object: DeepPartial<ListingStoreRecord>): ListingStoreRecord {
    const message = { ...baseListingStoreRecord } as ListingStoreRecord;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = new Uint8Array();
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = undefined;
    }
    if (
      object.fullPayToRoyalty !== undefined &&
      object.fullPayToRoyalty !== null
    ) {
      message.fullPayToRoyalty = object.fullPayToRoyalty;
    } else {
      message.fullPayToRoyalty = false;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
