/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.likenft.v1";

export interface ClassesByAccount {
  account: string;
  classIds: string[];
}

export interface ClassesByAccountStoreRecord {
  accAddress: Uint8Array;
  classIds: string[];
}

const baseClassesByAccount: object = { account: "", classIds: "" };

export const ClassesByAccount = {
  encode(
    message: ClassesByAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassesByAccount } as ClassesByAccount;
    message.classIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.classIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassesByAccount {
    const message = { ...baseClassesByAccount } as ClassesByAccount;
    message.classIds = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.classIds !== undefined && object.classIds !== null) {
      for (const e of object.classIds) {
        message.classIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ClassesByAccount): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.classIds) {
      obj.classIds = message.classIds.map((e) => e);
    } else {
      obj.classIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ClassesByAccount>): ClassesByAccount {
    const message = { ...baseClassesByAccount } as ClassesByAccount;
    message.classIds = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.classIds !== undefined && object.classIds !== null) {
      for (const e of object.classIds) {
        message.classIds.push(e);
      }
    }
    return message;
  },
};

const baseClassesByAccountStoreRecord: object = { classIds: "" };

export const ClassesByAccountStoreRecord = {
  encode(
    message: ClassesByAccountStoreRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accAddress.length !== 0) {
      writer.uint32(10).bytes(message.accAddress);
    }
    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClassesByAccountStoreRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClassesByAccountStoreRecord,
    } as ClassesByAccountStoreRecord;
    message.classIds = [];
    message.accAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddress = reader.bytes();
          break;
        case 2:
          message.classIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassesByAccountStoreRecord {
    const message = {
      ...baseClassesByAccountStoreRecord,
    } as ClassesByAccountStoreRecord;
    message.classIds = [];
    message.accAddress = new Uint8Array();
    if (object.accAddress !== undefined && object.accAddress !== null) {
      message.accAddress = bytesFromBase64(object.accAddress);
    }
    if (object.classIds !== undefined && object.classIds !== null) {
      for (const e of object.classIds) {
        message.classIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ClassesByAccountStoreRecord): unknown {
    const obj: any = {};
    message.accAddress !== undefined &&
      (obj.accAddress = base64FromBytes(
        message.accAddress !== undefined ? message.accAddress : new Uint8Array()
      ));
    if (message.classIds) {
      obj.classIds = message.classIds.map((e) => e);
    } else {
      obj.classIds = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ClassesByAccountStoreRecord>
  ): ClassesByAccountStoreRecord {
    const message = {
      ...baseClassesByAccountStoreRecord,
    } as ClassesByAccountStoreRecord;
    message.classIds = [];
    if (object.accAddress !== undefined && object.accAddress !== null) {
      message.accAddress = object.accAddress;
    } else {
      message.accAddress = new Uint8Array();
    }
    if (object.classIds !== undefined && object.classIds !== null) {
      for (const e of object.classIds) {
        message.classIds.push(e);
      }
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
