/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.likenft.v1";

export interface RoyaltyConfigByClass {
  classId: string;
  royaltyConfig?: RoyaltyConfig;
}

export interface RoyaltyConfig {
  rateBasisPoints: Long;
  stakeholders: RoyaltyStakeholder[];
}

export interface RoyaltyStakeholder {
  account: Uint8Array;
  weight: Long;
}

export interface RoyaltyConfigInput {
  rateBasisPoints: Long;
  stakeholders: RoyaltyStakeholderInput[];
}

export interface RoyaltyStakeholderInput {
  account: string;
  weight: Long;
}

const baseRoyaltyConfigByClass: object = { classId: "" };

export const RoyaltyConfigByClass = {
  encode(
    message: RoyaltyConfigByClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(
        message.royaltyConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RoyaltyConfigByClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoyaltyConfigByClass } as RoyaltyConfigByClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.royaltyConfig = RoyaltyConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyConfigByClass {
    const message = { ...baseRoyaltyConfigByClass } as RoyaltyConfigByClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromJSON(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },

  toJSON(message: RoyaltyConfigByClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.royaltyConfig !== undefined &&
      (obj.royaltyConfig = message.royaltyConfig
        ? RoyaltyConfig.toJSON(message.royaltyConfig)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyConfigByClass>): RoyaltyConfigByClass {
    const message = { ...baseRoyaltyConfigByClass } as RoyaltyConfigByClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromPartial(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },
};

const baseRoyaltyConfig: object = { rateBasisPoints: Long.UZERO };

export const RoyaltyConfig = {
  encode(
    message: RoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.rateBasisPoints.isZero()) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }
    for (const v of message.stakeholders) {
      RoyaltyStakeholder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoyaltyConfig } as RoyaltyConfig;
    message.stakeholders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateBasisPoints = reader.uint64() as Long;
          break;
        case 2:
          message.stakeholders.push(
            RoyaltyStakeholder.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyConfig {
    const message = { ...baseRoyaltyConfig } as RoyaltyConfig;
    message.stakeholders = [];
    if (
      object.rateBasisPoints !== undefined &&
      object.rateBasisPoints !== null
    ) {
      message.rateBasisPoints = Long.fromString(object.rateBasisPoints);
    } else {
      message.rateBasisPoints = Long.UZERO;
    }
    if (object.stakeholders !== undefined && object.stakeholders !== null) {
      for (const e of object.stakeholders) {
        message.stakeholders.push(RoyaltyStakeholder.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RoyaltyConfig): unknown {
    const obj: any = {};
    message.rateBasisPoints !== undefined &&
      (obj.rateBasisPoints = (
        message.rateBasisPoints || Long.UZERO
      ).toString());
    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map((e) =>
        e ? RoyaltyStakeholder.toJSON(e) : undefined
      );
    } else {
      obj.stakeholders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyConfig>): RoyaltyConfig {
    const message = { ...baseRoyaltyConfig } as RoyaltyConfig;
    message.stakeholders = [];
    if (
      object.rateBasisPoints !== undefined &&
      object.rateBasisPoints !== null
    ) {
      message.rateBasisPoints = object.rateBasisPoints as Long;
    } else {
      message.rateBasisPoints = Long.UZERO;
    }
    if (object.stakeholders !== undefined && object.stakeholders !== null) {
      for (const e of object.stakeholders) {
        message.stakeholders.push(RoyaltyStakeholder.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRoyaltyStakeholder: object = { weight: Long.UZERO };

export const RoyaltyStakeholder = {
  encode(
    message: RoyaltyStakeholder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }
    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyStakeholder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoyaltyStakeholder } as RoyaltyStakeholder;
    message.account = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;
        case 2:
          message.weight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyStakeholder {
    const message = { ...baseRoyaltyStakeholder } as RoyaltyStakeholder;
    message.account = new Uint8Array();
    if (object.account !== undefined && object.account !== null) {
      message.account = bytesFromBase64(object.account);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = Long.fromString(object.weight);
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: RoyaltyStakeholder): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = base64FromBytes(
        message.account !== undefined ? message.account : new Uint8Array()
      ));
    message.weight !== undefined &&
      (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyStakeholder>): RoyaltyStakeholder {
    const message = { ...baseRoyaltyStakeholder } as RoyaltyStakeholder;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = new Uint8Array();
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight as Long;
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },
};

const baseRoyaltyConfigInput: object = { rateBasisPoints: Long.UZERO };

export const RoyaltyConfigInput = {
  encode(
    message: RoyaltyConfigInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.rateBasisPoints.isZero()) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }
    for (const v of message.stakeholders) {
      RoyaltyStakeholderInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfigInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoyaltyConfigInput } as RoyaltyConfigInput;
    message.stakeholders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateBasisPoints = reader.uint64() as Long;
          break;
        case 2:
          message.stakeholders.push(
            RoyaltyStakeholderInput.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyConfigInput {
    const message = { ...baseRoyaltyConfigInput } as RoyaltyConfigInput;
    message.stakeholders = [];
    if (
      object.rateBasisPoints !== undefined &&
      object.rateBasisPoints !== null
    ) {
      message.rateBasisPoints = Long.fromString(object.rateBasisPoints);
    } else {
      message.rateBasisPoints = Long.UZERO;
    }
    if (object.stakeholders !== undefined && object.stakeholders !== null) {
      for (const e of object.stakeholders) {
        message.stakeholders.push(RoyaltyStakeholderInput.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RoyaltyConfigInput): unknown {
    const obj: any = {};
    message.rateBasisPoints !== undefined &&
      (obj.rateBasisPoints = (
        message.rateBasisPoints || Long.UZERO
      ).toString());
    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map((e) =>
        e ? RoyaltyStakeholderInput.toJSON(e) : undefined
      );
    } else {
      obj.stakeholders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyConfigInput>): RoyaltyConfigInput {
    const message = { ...baseRoyaltyConfigInput } as RoyaltyConfigInput;
    message.stakeholders = [];
    if (
      object.rateBasisPoints !== undefined &&
      object.rateBasisPoints !== null
    ) {
      message.rateBasisPoints = object.rateBasisPoints as Long;
    } else {
      message.rateBasisPoints = Long.UZERO;
    }
    if (object.stakeholders !== undefined && object.stakeholders !== null) {
      for (const e of object.stakeholders) {
        message.stakeholders.push(RoyaltyStakeholderInput.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRoyaltyStakeholderInput: object = { account: "", weight: Long.UZERO };

export const RoyaltyStakeholderInput = {
  encode(
    message: RoyaltyStakeholderInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RoyaltyStakeholderInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRoyaltyStakeholderInput,
    } as RoyaltyStakeholderInput;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.weight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyStakeholderInput {
    const message = {
      ...baseRoyaltyStakeholderInput,
    } as RoyaltyStakeholderInput;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = Long.fromString(object.weight);
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: RoyaltyStakeholderInput): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.weight !== undefined &&
      (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<RoyaltyStakeholderInput>
  ): RoyaltyStakeholderInput {
    const message = {
      ...baseRoyaltyStakeholderInput,
    } as RoyaltyStakeholderInput;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight as Long;
    } else {
      message.weight = Long.UZERO;
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
