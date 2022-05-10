/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "likechain.likenft";

export enum ClassParentType {
  UNKNOWN = 0,
  ISCN = 1,
  ACCOUNT = 2,
  UNRECOGNIZED = -1,
}

export function classParentTypeFromJSON(object: any): ClassParentType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ClassParentType.UNKNOWN;
    case 1:
    case "ISCN":
      return ClassParentType.ISCN;
    case 2:
    case "ACCOUNT":
      return ClassParentType.ACCOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClassParentType.UNRECOGNIZED;
  }
}

export function classParentTypeToJSON(object: ClassParentType): string {
  switch (object) {
    case ClassParentType.UNKNOWN:
      return "UNKNOWN";
    case ClassParentType.ISCN:
      return "ISCN";
    case ClassParentType.ACCOUNT:
      return "ACCOUNT";
    default:
      return "UNKNOWN";
  }
}

export interface ClassData {
  metadata: Uint8Array;
  parent?: ClassParent;
  config?: ClassConfig;
  mintableCount: Long;
  toBeRevealed: boolean;
}

export interface ClassParent {
  type: ClassParentType;
  iscnIdPrefix: string;
  iscnVersionAtMint: Long;
  account: string;
}

export interface MintPeriod {
  startTime?: Date;
  allowedAddresses: string[];
  mintPrice: Long;
}

export interface ClassConfig {
  burnable: boolean;
  maxSupply: Long;
  blindBoxConfig?: BlindBoxConfig;
}

export interface BlindBoxConfig {
  mintPeriods: MintPeriod[];
  revealTime?: Date;
}

const baseClassData: object = {
  mintableCount: Long.UZERO,
  toBeRevealed: false,
};

export const ClassData = {
  encode(
    message: ClassData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metadata.length !== 0) {
      writer.uint32(10).bytes(message.metadata);
    }
    if (message.parent !== undefined) {
      ClassParent.encode(message.parent, writer.uint32(18).fork()).ldelim();
    }
    if (message.config !== undefined) {
      ClassConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    if (!message.mintableCount.isZero()) {
      writer.uint32(32).uint64(message.mintableCount);
    }
    if (message.toBeRevealed === true) {
      writer.uint32(40).bool(message.toBeRevealed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassData } as ClassData;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = reader.bytes();
          break;
        case 2:
          message.parent = ClassParent.decode(reader, reader.uint32());
          break;
        case 3:
          message.config = ClassConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.mintableCount = reader.uint64() as Long;
          break;
        case 5:
          message.toBeRevealed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassData {
    const message = { ...baseClassData } as ClassData;
    message.metadata = new Uint8Array();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = ClassParent.fromJSON(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ClassConfig.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    if (object.mintableCount !== undefined && object.mintableCount !== null) {
      message.mintableCount = Long.fromString(object.mintableCount);
    } else {
      message.mintableCount = Long.UZERO;
    }
    if (object.toBeRevealed !== undefined && object.toBeRevealed !== null) {
      message.toBeRevealed = Boolean(object.toBeRevealed);
    } else {
      message.toBeRevealed = false;
    }
    return message;
  },

  toJSON(message: ClassData): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? ClassParent.toJSON(message.parent)
        : undefined);
    message.config !== undefined &&
      (obj.config = message.config
        ? ClassConfig.toJSON(message.config)
        : undefined);
    message.mintableCount !== undefined &&
      (obj.mintableCount = (message.mintableCount || Long.UZERO).toString());
    message.toBeRevealed !== undefined &&
      (obj.toBeRevealed = message.toBeRevealed);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassData>): ClassData {
    const message = { ...baseClassData } as ClassData;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = ClassParent.fromPartial(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ClassConfig.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    if (object.mintableCount !== undefined && object.mintableCount !== null) {
      message.mintableCount = object.mintableCount as Long;
    } else {
      message.mintableCount = Long.UZERO;
    }
    if (object.toBeRevealed !== undefined && object.toBeRevealed !== null) {
      message.toBeRevealed = object.toBeRevealed;
    } else {
      message.toBeRevealed = false;
    }
    return message;
  },
};

const baseClassParent: object = {
  type: 0,
  iscnIdPrefix: "",
  iscnVersionAtMint: Long.UZERO,
  account: "",
};

export const ClassParent = {
  encode(
    message: ClassParent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.iscnIdPrefix !== "") {
      writer.uint32(18).string(message.iscnIdPrefix);
    }
    if (!message.iscnVersionAtMint.isZero()) {
      writer.uint32(24).uint64(message.iscnVersionAtMint);
    }
    if (message.account !== "") {
      writer.uint32(34).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassParent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassParent } as ClassParent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.iscnIdPrefix = reader.string();
          break;
        case 3:
          message.iscnVersionAtMint = reader.uint64() as Long;
          break;
        case 4:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassParent {
    const message = { ...baseClassParent } as ClassParent;
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
    if (
      object.iscnVersionAtMint !== undefined &&
      object.iscnVersionAtMint !== null
    ) {
      message.iscnVersionAtMint = Long.fromString(object.iscnVersionAtMint);
    } else {
      message.iscnVersionAtMint = Long.UZERO;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    return message;
  },

  toJSON(message: ClassParent): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = classParentTypeToJSON(message.type));
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    message.iscnVersionAtMint !== undefined &&
      (obj.iscnVersionAtMint = (
        message.iscnVersionAtMint || Long.UZERO
      ).toString());
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassParent>): ClassParent {
    const message = { ...baseClassParent } as ClassParent;
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
    if (
      object.iscnVersionAtMint !== undefined &&
      object.iscnVersionAtMint !== null
    ) {
      message.iscnVersionAtMint = object.iscnVersionAtMint as Long;
    } else {
      message.iscnVersionAtMint = Long.UZERO;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    return message;
  },
};

const baseMintPeriod: object = { allowedAddresses: "", mintPrice: Long.UZERO };

export const MintPeriod = {
  encode(
    message: MintPeriod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.allowedAddresses) {
      writer.uint32(18).string(v!);
    }
    if (!message.mintPrice.isZero()) {
      writer.uint32(24).uint64(message.mintPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintPeriod } as MintPeriod;
    message.allowedAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.allowedAddresses.push(reader.string());
          break;
        case 3:
          message.mintPrice = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintPeriod {
    const message = { ...baseMintPeriod } as MintPeriod;
    message.allowedAddresses = [];
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime);
    } else {
      message.startTime = undefined;
    }
    if (
      object.allowedAddresses !== undefined &&
      object.allowedAddresses !== null
    ) {
      for (const e of object.allowedAddresses) {
        message.allowedAddresses.push(String(e));
      }
    }
    if (object.mintPrice !== undefined && object.mintPrice !== null) {
      message.mintPrice = Long.fromString(object.mintPrice);
    } else {
      message.mintPrice = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MintPeriod): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    if (message.allowedAddresses) {
      obj.allowedAddresses = message.allowedAddresses.map((e) => e);
    } else {
      obj.allowedAddresses = [];
    }
    message.mintPrice !== undefined &&
      (obj.mintPrice = (message.mintPrice || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MintPeriod>): MintPeriod {
    const message = { ...baseMintPeriod } as MintPeriod;
    message.allowedAddresses = [];
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = undefined;
    }
    if (
      object.allowedAddresses !== undefined &&
      object.allowedAddresses !== null
    ) {
      for (const e of object.allowedAddresses) {
        message.allowedAddresses.push(e);
      }
    }
    if (object.mintPrice !== undefined && object.mintPrice !== null) {
      message.mintPrice = object.mintPrice as Long;
    } else {
      message.mintPrice = Long.UZERO;
    }
    return message;
  },
};

const baseClassConfig: object = { burnable: false, maxSupply: Long.UZERO };

export const ClassConfig = {
  encode(
    message: ClassConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.burnable === true) {
      writer.uint32(8).bool(message.burnable);
    }
    if (!message.maxSupply.isZero()) {
      writer.uint32(16).uint64(message.maxSupply);
    }
    if (message.blindBoxConfig !== undefined) {
      BlindBoxConfig.encode(
        message.blindBoxConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassConfig } as ClassConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnable = reader.bool();
          break;
        case 2:
          message.maxSupply = reader.uint64() as Long;
          break;
        case 3:
          message.blindBoxConfig = BlindBoxConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassConfig {
    const message = { ...baseClassConfig } as ClassConfig;
    if (object.burnable !== undefined && object.burnable !== null) {
      message.burnable = Boolean(object.burnable);
    } else {
      message.burnable = false;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Long.fromString(object.maxSupply);
    } else {
      message.maxSupply = Long.UZERO;
    }
    if (object.blindBoxConfig !== undefined && object.blindBoxConfig !== null) {
      message.blindBoxConfig = BlindBoxConfig.fromJSON(object.blindBoxConfig);
    } else {
      message.blindBoxConfig = undefined;
    }
    return message;
  },

  toJSON(message: ClassConfig): unknown {
    const obj: any = {};
    message.burnable !== undefined && (obj.burnable = message.burnable);
    message.maxSupply !== undefined &&
      (obj.maxSupply = (message.maxSupply || Long.UZERO).toString());
    message.blindBoxConfig !== undefined &&
      (obj.blindBoxConfig = message.blindBoxConfig
        ? BlindBoxConfig.toJSON(message.blindBoxConfig)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassConfig>): ClassConfig {
    const message = { ...baseClassConfig } as ClassConfig;
    if (object.burnable !== undefined && object.burnable !== null) {
      message.burnable = object.burnable;
    } else {
      message.burnable = false;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply as Long;
    } else {
      message.maxSupply = Long.UZERO;
    }
    if (object.blindBoxConfig !== undefined && object.blindBoxConfig !== null) {
      message.blindBoxConfig = BlindBoxConfig.fromPartial(
        object.blindBoxConfig
      );
    } else {
      message.blindBoxConfig = undefined;
    }
    return message;
  },
};

const baseBlindBoxConfig: object = {};

export const BlindBoxConfig = {
  encode(
    message: BlindBoxConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mintPeriods) {
      MintPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.revealTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.revealTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlindBoxConfig } as BlindBoxConfig;
    message.mintPeriods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintPeriods.push(MintPeriod.decode(reader, reader.uint32()));
          break;
        case 2:
          message.revealTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlindBoxConfig {
    const message = { ...baseBlindBoxConfig } as BlindBoxConfig;
    message.mintPeriods = [];
    if (object.mintPeriods !== undefined && object.mintPeriods !== null) {
      for (const e of object.mintPeriods) {
        message.mintPeriods.push(MintPeriod.fromJSON(e));
      }
    }
    if (object.revealTime !== undefined && object.revealTime !== null) {
      message.revealTime = fromJsonTimestamp(object.revealTime);
    } else {
      message.revealTime = undefined;
    }
    return message;
  },

  toJSON(message: BlindBoxConfig): unknown {
    const obj: any = {};
    if (message.mintPeriods) {
      obj.mintPeriods = message.mintPeriods.map((e) =>
        e ? MintPeriod.toJSON(e) : undefined
      );
    } else {
      obj.mintPeriods = [];
    }
    message.revealTime !== undefined &&
      (obj.revealTime = message.revealTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BlindBoxConfig>): BlindBoxConfig {
    const message = { ...baseBlindBoxConfig } as BlindBoxConfig;
    message.mintPeriods = [];
    if (object.mintPeriods !== undefined && object.mintPeriods !== null) {
      for (const e of object.mintPeriods) {
        message.mintPeriods.push(MintPeriod.fromPartial(e));
      }
    }
    if (object.revealTime !== undefined && object.revealTime !== null) {
      message.revealTime = object.revealTime;
    } else {
      message.revealTime = undefined;
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
