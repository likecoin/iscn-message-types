/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "likechain.likenft.v1";

export interface ListingExpireQueueEntry {
  expireTime?: Date;
  listingKey: Uint8Array;
}

const baseListingExpireQueueEntry: object = {};

export const ListingExpireQueueEntry = {
  encode(
    message: ListingExpireQueueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.expireTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expireTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.listingKey.length !== 0) {
      writer.uint32(18).bytes(message.listingKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListingExpireQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListingExpireQueueEntry,
    } as ListingExpireQueueEntry;
    message.listingKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expireTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.listingKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListingExpireQueueEntry {
    const message = {
      ...baseListingExpireQueueEntry,
    } as ListingExpireQueueEntry;
    message.listingKey = new Uint8Array();
    if (object.expireTime !== undefined && object.expireTime !== null) {
      message.expireTime = fromJsonTimestamp(object.expireTime);
    } else {
      message.expireTime = undefined;
    }
    if (object.listingKey !== undefined && object.listingKey !== null) {
      message.listingKey = bytesFromBase64(object.listingKey);
    }
    return message;
  },

  toJSON(message: ListingExpireQueueEntry): unknown {
    const obj: any = {};
    message.expireTime !== undefined &&
      (obj.expireTime = message.expireTime.toISOString());
    message.listingKey !== undefined &&
      (obj.listingKey = base64FromBytes(
        message.listingKey !== undefined ? message.listingKey : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListingExpireQueueEntry>
  ): ListingExpireQueueEntry {
    const message = {
      ...baseListingExpireQueueEntry,
    } as ListingExpireQueueEntry;
    if (object.expireTime !== undefined && object.expireTime !== null) {
      message.expireTime = object.expireTime;
    } else {
      message.expireTime = undefined;
    }
    if (object.listingKey !== undefined && object.listingKey !== null) {
      message.listingKey = object.listingKey;
    } else {
      message.listingKey = new Uint8Array();
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
