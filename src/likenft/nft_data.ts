/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClassParent } from "../likenft/class_data";

export const protobufPackage = "likechain.likenft";

export interface NFTData {
  metadata: Uint8Array;
  classParent?: ClassParent;
  toBeRevealed: boolean;
}

const baseNFTData: object = { toBeRevealed: false };

export const NFTData = {
  encode(
    message: NFTData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metadata.length !== 0) {
      writer.uint32(10).bytes(message.metadata);
    }
    if (message.classParent !== undefined) {
      ClassParent.encode(
        message.classParent,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.toBeRevealed === true) {
      writer.uint32(24).bool(message.toBeRevealed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFTData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFTData } as NFTData;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = reader.bytes();
          break;
        case 2:
          message.classParent = ClassParent.decode(reader, reader.uint32());
          break;
        case 3:
          message.toBeRevealed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTData {
    const message = { ...baseNFTData } as NFTData;
    message.metadata = new Uint8Array();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.classParent !== undefined && object.classParent !== null) {
      message.classParent = ClassParent.fromJSON(object.classParent);
    } else {
      message.classParent = undefined;
    }
    if (object.toBeRevealed !== undefined && object.toBeRevealed !== null) {
      message.toBeRevealed = Boolean(object.toBeRevealed);
    } else {
      message.toBeRevealed = false;
    }
    return message;
  },

  toJSON(message: NFTData): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    message.classParent !== undefined &&
      (obj.classParent = message.classParent
        ? ClassParent.toJSON(message.classParent)
        : undefined);
    message.toBeRevealed !== undefined &&
      (obj.toBeRevealed = message.toBeRevealed);
    return obj;
  },

  fromPartial(object: DeepPartial<NFTData>): NFTData {
    const message = { ...baseNFTData } as NFTData;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    if (object.classParent !== undefined && object.classParent !== null) {
      message.classParent = ClassParent.fromPartial(object.classParent);
    } else {
      message.classParent = undefined;
    }
    if (object.toBeRevealed !== undefined && object.toBeRevealed !== null) {
      message.toBeRevealed = object.toBeRevealed;
    } else {
      message.toBeRevealed = false;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
