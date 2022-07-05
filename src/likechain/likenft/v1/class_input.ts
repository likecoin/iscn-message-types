/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ClassConfig,
  ClassParentType,
  classParentTypeFromJSON,
  classParentTypeToJSON,
} from "../../../likechain/likenft/v1/class_data";

export const protobufPackage = "likechain.likenft.v1";

export interface ClassInput {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
  config?: ClassConfig;
}

export interface ClassParentInput {
  type: ClassParentType;
  /** for account, infers to use message sender's address */
  iscnIdPrefix: string;
}

const baseClassInput: object = {
  name: "",
  symbol: "",
  description: "",
  uri: "",
  uriHash: "",
};

export const ClassInput = {
  encode(
    message: ClassInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }
    if (message.config !== undefined) {
      ClassConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassInput } as ClassInput;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.uriHash = reader.string();
          break;
        case 6:
          message.metadata = reader.bytes();
          break;
        case 7:
          message.config = ClassConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassInput {
    const message = { ...baseClassInput } as ClassInput;
    message.metadata = new Uint8Array();
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = String(object.uriHash);
    } else {
      message.uriHash = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ClassConfig.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },

  toJSON(message: ClassInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined &&
      (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    message.config !== undefined &&
      (obj.config = message.config
        ? ClassConfig.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassInput>): ClassInput {
    const message = { ...baseClassInput } as ClassInput;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = object.uriHash;
    } else {
      message.uriHash = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ClassConfig.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },
};

const baseClassParentInput: object = { type: 0, iscnIdPrefix: "" };

export const ClassParentInput = {
  encode(
    message: ClassParentInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.iscnIdPrefix !== "") {
      writer.uint32(18).string(message.iscnIdPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassParentInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassParentInput } as ClassParentInput;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.iscnIdPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassParentInput {
    const message = { ...baseClassParentInput } as ClassParentInput;
    if (object.type !== undefined && object.type !== null) {
      message.type = classParentTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    return message;
  },

  toJSON(message: ClassParentInput): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = classParentTypeToJSON(message.type));
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassParentInput>): ClassParentInput {
    const message = { ...baseClassParentInput } as ClassParentInput;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
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
